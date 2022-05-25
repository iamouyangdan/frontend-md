# Git的基本使用
这里只作简单说明以及日常使用频繁的几个操作，详情请参考: [https://www.liaoxuefeng.com/wiki/896043488029600](https://www.liaoxuefeng.com/wiki/896043488029600)

## GIT介绍

Git是一个开源的分布式版本控制系统，是用来保存工程源代码历史状态的命令行工具。git的主要作用是用来进行文件、代码的同步，代码版本管理。(总不能我每天写完一份代码之后，拿个U盘拷到另外一个人电脑上看吧)

## GIT基本概念及使用

git由以下几个部分构成，具体关系如图所示：

工作区、版本库、暂存区、分支

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image1.png)

git一次完整的提交流程：

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image2.png)

### 基本操作

将远程仓库克隆到本地: 

```text
$ git clone <仓库地址>
```

切换分支: 

```text
切换到本地已有分支
$ git checkout <分支名字>
创建新分支并切换到该分支
$ git checkout -b <分支名字>
```

拉取代码:

```text
拉取当前默认分支的代码
$ git pull
拉取指定分支代码
$ git pull origin <分支名>
```

把工作区的改动添加到暂存区

```text
添加指定文件到暂存区
$ git add <文件目录>
添加当前目录下所有改动文件到暂存区
$ git add .
```

把暂存区的文件添加到本地分支

```text
$ git commit -m <版本描述>
```

把本地分支推至远程分支

```text
推送到当前默认分支
$ git push
推送到指定分支
$ git push origin <分支名>
```

查看当前工作区、暂存区的文件

```text
$ git status
```

## 代码拉取示例

以梦想家重构为例，拉取代码并切换到0.0.1分支。（[http://gitlab.sinmn.cn:8888/mxjRe/website-page](http://gitlab.sinmn.cn:8888/mxjRe/website-page)）

1、获取GIT项目地址远程仓库地址

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image3.png)

2、将远程仓库克隆到本地（git clone <远程仓库地址>）

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image4.png)

3、切换分支（git checkout <分支名>）

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image5.png)

## 代码提交示例

1、先查看工作区中的文件更改（git status）

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image6.png)

2、确认文件修改情况后把需要提交的文件添加到暂存区（git add <文件目录>）

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image7.png)

3、确认文件是否添加到暂存区（git status）

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image8.png)

4、把暂存区的文件提交到本地版本库的分支，并查看是否提交成功（git commit -m <版本描述>）

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image9.png)

5、合并远程版本库代码，并提交本地版本库分支代码到远程仓库分支（git pull 和 git push）

远程版本库没有代码改动，直接提交即可

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image10.png)

## 代码冲突

在以上的"代码提交示例"中，执行 git pull 操作的时候有可能会出现代码冲突：

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image11.png)

冲突原因：远程分支的更改与本地分支中的更改在同一个地方

冲突解决：找到发生冲突部分的代码，本地版本（Current Change）与远程版本（Incoming Change）比较，选择正确的版本。或者选择保留双方代码，再手动修改代码解决问题。

![](/images/auto/Git%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/image12.png)

解决冲突后再按照，"代码提交示例"的步骤重新提交代码。**注意要解决冲突之后再提交，不要提交有冲突的代码**

