"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("merge");
const colors = require("colors/safe");
const fs_1 = require("fs");
const path_1 = require("path");
const core_1 = require("./core");
const options_1 = require("./config/options");
const types_1 = require("./types");
const nav_1 = require("./utils/nav");
const git_1 = require("./utils/git");
const AutoSidebarPlugin = (options, ctx) => {
    // console.info('options', options);
    const MERGE_OPTIONS = merge_1.default.recursive(options_1.AutoSidebarOptionsDefault, options);
    let AUTO_SIDEBAR_DATA = Object.create(null);
    // console.info('MERGE_OPTIONS', MERGE_OPTIONS);
    const isGitValid = true;
    return {
        name: 'vuepress-plugin-auto-sidebar',
        ready() {
            MERGE_OPTIONS.version = types_1.VuePressVersion.V1;
            const sidebarData = core_1.default(ctx.pages, MERGE_OPTIONS);
            AUTO_SIDEBAR_DATA = sidebarData;
        },
        onPrepared(App) {
            MERGE_OPTIONS.version = types_1.VuePressVersion.V2;
            const pages = App.pages.map((page) => (Object.assign(Object.assign({}, page), { relativePath: page.filePathRelative, filename: page.slug })));
            const sidebarData = core_1.default(pages, MERGE_OPTIONS);
            const destSidebar = path_1.resolve(App.options.source, '.vuepress', `${MERGE_OPTIONS.output.filename}.js`);
            fs_1.writeFileSync(destSidebar, `module.exports = ${JSON.stringify(sidebarData, null, 2)};`);
        },
        enhanceAppFiles() {
            return {
                name: 'auto-sidebar-enhance',
                content: `export default ({ siteData, options }) => { siteData.themeConfig.sidebar = ${JSON.stringify(AUTO_SIDEBAR_DATA)} }`
            };
        },
        extendPageData(page) {
            return __awaiter(this, void 0, void 0, function* () {
                if (page.relativePath) {
                    const filepath = path_1.join(ctx.sourceDir, page.relativePath);
                    if (isGitValid) {
                        const createdTime = yield git_1.getGitCreatedTime(filepath);
                        if (!isNaN(createdTime)) {
                            page.createdTime = createdTime;
                        }
                    }
                }
            });
        },
        extendsPageData(page) {
            return __awaiter(this, void 0, void 0, function* () {
                if (page.filePath) {
                    if (isGitValid) {
                        const createdTime = yield git_1.getGitCreatedTime(page.filePath);
                        const gitIndex = yield git_1.isGitIndex(page.filePath);
                        if (gitIndex) {
                            page.gitStatus = 'add';
                        }
                        if (!isNaN(createdTime)) {
                            page.createdTime = createdTime;
                            page.gitStatus = 'commit';
                        }
                    }
                }
            });
        },
        extendCli(cli) {
            cli
                .command('nav [targetDir]', '生成导航栏（generate nav file）')
                .option('-f, --force', '强制覆盖已存在的 nav 文件（Forcibly overwrite the existing nav file）')
                .action((dir, options) => {
                const nav = nav_1.genNav(AUTO_SIDEBAR_DATA);
                const dest = path_1.join(ctx.sourceDir, '.vuepress/nav.js');
                if (options.force || !fs_1.existsSync(dest)) {
                    fs_1.writeFileSync(dest, `module.exports = ${JSON.stringify(nav, null, 2)};`);
                    console.log(colors.green(`已在 ${dest} 生成 nav 配置文件`));
                }
                else {
                    console.log(colors.red(`${dest} 已存在文件，可使用 vuepress nav ${dir} -f 覆盖配置文件`));
                }
            });
        }
    };
};
module.exports = AutoSidebarPlugin;