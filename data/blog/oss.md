---
title: Everyday OSS
date: 2023-04-01
tags: ["OSS"]
draft: False
layout: PostSimple
---

1日1つのOSS(オープンソースソフトウェア)を紹介していきます。  
情報は基本的には調査日時(Survey date)時点のものです。  
なお全ての情報が正しいとは限りません。ご了承ください。  

---

## Linux

| title | contents |
|-|-|
| No | 0001 |  
| Survey date | 2023/04/01 |  
| Official site | https://kernel.org |  
| Source code | https://git.kernel.org |  
| Language | C |  
| Category | OS, Linux |  
| Release date | 1991/09/17 |  
| License | GPL-2.0 |  
| Status | Active |  

Unix系のOSの1つであり、PCだけでなくサーバーや組み込み機器などにも搭載されている。  
LinuxをカーネルとしたディストリビューションとしてはUbuntuやRed Hat Enterprise Linux, Arch Linuxなどが有名。  

---

## GCC

| title | contents |
|-|-|
| No | 0002 |  
| Survey date | 2023/04/02 |  
| Official site | https://gcc.gnu.org |  
| Source code | https://gcc.gnu.org/git/gcc.git |  
| Language | C, C++ |  
| Category | Compiler, GNU |  
| Release date | 1987/03/22 |  
| License | GPLv3 |  
| Status | Active |  

GNUツールチェーンの中核をなすコンパイラ。  
CやC++だけでなくGoやFortranなどにも対応している。  
元はGNU C Compilerの略称だったが多言語対応したことに伴い、今はGNU Compiler Collectionの略称となっている。  

---

## LLVM

| title | contents |
|-|-|
| No | 0003 |  
| Survey date | 2023/04/03 |  
| Official site | https://llvm.org |  
| Source code | https://github.com/llvm/llvm-project |  
| Language | C++ |  
| Category | Compiler, VM |  
| Release date | 2003/10/25 |  
| License | Apache License v2.0 |  
| Status | Active |  

GCCと双璧をなすコンパイラ。またコンパイラ基盤。  
LLVM IRという中間言語に翻訳されてからターゲットの機械語に翻訳される。  
そのため言語やアーキテクチャを問わず、様々なプラットフォームに対応できる。  

---

## Python

| title | contents |
|-|-|
| No | 0004 |  
| Survey date | 2023/04/04 |  
| Official site | https://python.org |  
| Source code | https://github.com/python/cpython |  
| Language | Python, C |  
| Category | Programming language, Python |  
| Release date | 1991/02/20 |  
| License | Python Software Foundation License |  
| Status | Active |  

AIや科学技術計算をはじめとした幅広い分野で人気を誇る言語。  
動的型付け言語であり、簡単で読みやすいコードが書きやすい。  
また、標準ライブラリやサードパーティのライブラリが非常に充実している。  
Pythonは言語仕様に基づいた実装がいくつかある。  
Pythonソフトウェア財団が開発しているのはC言語で実装されたCPythonである。  
他にコミュニティーが開発しているものとしてはPythonで実装されたPyPyや.NETで実装されたIronPython、Rustで実装されたRustPythonなどがある。  

---

## Rust

| title | contents |
|-|-|
| No | 0005 |  
| Survey date | 2023/04/05 |  
| Official site | https://rust-lang.org |  
| Source code | https://github.com/rust-lang/rust |  
| Language | Rust |  
| Category | Programming language, Rust |  
| Release date | 2015/04/15 |  
| License | Apache License v2.0, MIT License |  
| Status | Active |  

言語仕様により安全性が強力に担保されており、メモリ安全性やスレッド安全性を目指して開発されている。  
ガベージコレクションを持たず、C言語やC++に匹敵する速度で動作する。  
近年生まれた言語ということもあり文法がモダンで、パッケージマネージャーやリンター、フォーマッターなどを標準で備えている。  
またStack Overflowが発表している最も愛されている言語ランキングでは2016年以来7年連続で首位を獲得している。  

---

## Firefox

| title | contents |
|-|-|
| No | 0006 |  
| Survey date | 2023/04/06 |  
| Official site | https://www.mozilla.org/firefox |  
| Source code | https://searchfox.org/mozilla-central/source |  
| Language | C, C++, Assembly, Rust |  
| Category | Web browser |  
| Release date | 2002/09/23 |  
| License | Mozilla Public License |  
| Status | Active |  

Mozillaが開発する高機能なブラウザ。  
Rustで開発されたレンダリングエンジンや高いカスタマイズ性、プライバシー保護性などの特徴がある。  
Linuxのディストリビューションでは標準のブラウザとしてよく用いられている。  
またTor Browserのベースにもなっている。  

---

## Chromium

| title | contents |
|-|-|
| No | 0007 |  
| Survey date | 2023/04/07 |  
| Official site | https://www.chromium.org |  
| Source code | https://source.chromium.org/chromium |  
| Language | C++, Assembly, Rust |  
| Category | Web browser |  
| Release date | 2008/09/02 |  
| License | BSD-3 |  
| Status | Active |  

Googleが開発を主導しており、Google Chromeのベースとなっているソフトウェア。  
Chrome以外にもEdgeやVivaldi、Operaなどもベースにしている。  
タブごとにプロセスが独立するマルチプロセスアーキテクチャに基づいて設計されており、安定性が高い。  
またサンドボックスやセーフブラウジング保護機能などを兼ね備える。  

---

## WebKit

| title | contents |
|-|-|
| No | 0008 |  
| Survey date | 2023/04/08 |  
| Official site | https://webkit.org |  
| Source code | https://github.com/WebKit/WebKit |  
| Language | C++ |  
| Category | Rendering engine |  
| Release date | 1998/11/04 |  
| License | LGPL, BSD licenses |  
| Status | Active |  

Appleが開発を主導するクロスプラットフォームのレンダリングエンジン。  
過去にはGoogleも開発に参加しておりChromeにも採用されていたが、開発方針の不一致によりGoogleのレンダリングエンジンはBlinkに分裂した。  

---

## GNU Core Utilities

| title | contents |
|-|-|
| No | 0009 |  
| Survey date | 2023/04/09 |  
| Official site | https://www.gnu.org/software/coreutils |  
| Source code | https://git.savannah.gnu.org/cgit/coreutils.git |  
| Language | C |  
| Category | Shell, Tool |  
| Release date | 2002/09 |  
| License | GPLv3 |  
| Status | Active |  

lsやcat、mkdir、rm等のUnix系OSで必須とも言えるコマンドツールを集めたソフトウェア。  
元々はfileutils、textutils、shellutilsに分かれていたが2002年9月にCore Utilitiesへ統合された。  

---

## Visual Studio Code

| title | contents |
|-|-|
| No | 0010 |  
| Survey date | 2023/04/10 |  
| Official site | https://code.visualstudio.com |  
| Source code | https://github.com/microsoft/vscode |  
| Language | TypeScript |  
| Category | Text Editor |  
| Release date | 2015/04/29 |  
| License | MIT License |  
| Status | Active |  

マイクロソフトが開発を主導するエディター。  
テキストの編集だけではなくデバッグやGit、コード補完、シンタックスハイライト、アドオンによる機能などの様々な機能を備える。  
StackOverflowの調査では最も人気のあるエディター。  

---

## Git

| title | contents |
|-|-|
| No | 0011 |  
| Survey date | 2023/04/11 |  
| Official site | https://git-scm.com |  
| Source code | https://git.kernel.org/pub/scm/git/git.git |  
| Language | C, Shell Script |  
| Category | Version Control System |  
| Release date | 2005/04/07 |  
| License | GPLv2 |  
| Status | Active |  

分散型のバージョン管理システム。  
Linuxの開発では商用のバージョン管理システムが用いられていたが、トラブルが有りその環境が使えなくなったため開発された。  
特に動作速度が重視されている。  

---

## Gitlab

| title | contents |
|-|-|
| No | 0012 |  
| Survey date | 2023/04/12 |  
| Official site | https://about.gitlab.com |  
| Source code | https://gitlab.com/gitlab-org/gitlab-foss |  
| Language | Ruby, JavaScript |  
| Category | Git |  
| Release date | 2011 |  
| License | MIT License |  
| Status | Active |  

Gitリポジトリマネージャーで、「ギットラブ」と発音する。  
SaaSとしてgitlab.comが提供されている。  

---

## LibreOffice

| title | contents |
|-|-|
| No | 0013 |  
| Survey date | 2023/04/13 |  
| Official site | https://www.libreoffice.org |  
| Source code | https://git.libreoffice.org/core |  
| Language | C++ |  
| Category | Application |  
| Release date | 2011/01/25 |  
| License | GPLv3 |  
| Status | Active |  

Microsoft Officeと互換性を持つオフィスソフトウェア。  
ワードプロセッサのWriter、表計算のCalc、プレゼンテーションのImpress、グラフィックスのDraw、データーベースのBase、数式作成のMathから構成されている。  

---

## MediaWiki

| title | contents |
|-|-|
| No | 0014 |  
| Survey date | 2023/04/14 |  
| Official site | https://www.mediawiki.org/wiki/MediaWiki |  
| Source code | https://gerrit.wikimedia.org/g/mediawiki/core |  
| Language | PHP |  
| Category | Wiki |  
| Release date | 2002/01/25 |  
| License | GPLv2 |  
| Status | Active |  

Wikipediaに代表されるWikiソフトウェア。  
大規模WebサイトであるWikipediaでも使用されるため、数TBのコンテンツと数十万ビュー/毎秒にも耐えられるような設計になっている。  

---

## Bash

| title | contents |
|-|-|
| No | 0015 |  
| Survey date | 2023/04/15 |  
| Official site | https://www.gnu.org/software/bash |  
| Source code | https://git.savannah.gnu.org/cgit/bash.git |  
| Language | C |  
| Category | Shell |  
| Release date | 1989/06/08 |  
| License | GPLv3 |  
| Status | Active |  

ほとんどのLinuxディストリビューションでデフォルトに設定されているシェル。  
Bourne Shellを置き換えるという目標のもと開発された。  
bashという名前はBourne-again shellに由来する。  

---

## glibc

| title | contents |
|-|-|
| No | 0016 |  
| Survey date | 2023/04/16 |  
| Official site | https://www.gnu.org/software/libc |  
| Source code | https://sourceware.org/git/glibc.git |  
| Language | C |  
| Category | Library |  
| Release date | 1987 |  
| License | LGPL2.1 |  
| Status | Active |  

標準Cライブラリのデファクトスタンダード。  
動的ライブラリであり、`/lib/libc.so.6`に存在する。  

---

## musl

| title | contents |
|-|-|
| No | 0017 |  
| Survey date | 2023/04/17 |  
| Official site | https://musl.libc.org |  
| Source code | https://git.musl-libc.org/cgit/musl |  
| Language | C |  
| Category | Library |  
| Release date | 2011/02/11 |  
| License | MIT License |  
| Status | Active |  

軽量で効率的な標準Cライブラリ。  
Alpine Linuxなどでは標準Cライブラリとして採用されている。  

---

## Android

| title | contents |
|-|-|
| No | 0018 |  
| Survey date | 2023/04/18 |  
| Official site | https://www.android.com |  
| Source code | https://android.googlesource.com |  
| Language | Java, C, C++ |  
| Category | OS |  
| Release date | 2008/09/23 |  
| License | Apache 2.0 |  
| Status | Active |  

Googleが開発したLinuxベースのモバイル用OS。  
Android OSが搭載された端末は30億台を超え、世界一普及しているOSとなっている。  

---

## Cygwin

| title | contents |
|-|-|
| No | 0019 |  
| Survey date | 2023/04/19 |  
| Official site | https://www.cygwin.com |  
| Source code | https://cygwin.com/git/newlib-cygwin.git |  
| Language | C, C++ |  
| Category | Compatibility layer |  
| Release date | 1995/10/18 |  
| License | GPLv3 |  
| Status | Active |  

WindowsにUnixの互換レイヤーを提供するソフトウェア。  
仮想化ではないため軽量で高速に動作する。  

---

## Apache HTTP Server

| title | contents |
|-|-|
| No | 0020 |  
| Survey date | 2023/04/20 |  
| Official site | https://httpd.apache.org |  
| Source code | http://svn.apache.org/repos/asf/httpd/httpd |  
| Language | C |  
| Category | Web Server |  
| Release date | 1995 |  
| License | Apache License |  
| Status | Active |  

人気のあるWebサーバー用ソフトウェア。  
このソフトウェアを開発・支援するためにApache財団が発足した。  

---

## Nginx

| title | contents |
|-|-|
| No | 0021 |  
| Survey date | 2023/04/21 |  
| Official site | https://nginx.org |  
| Source code | https://hg.nginx.org/nginx |  
| Language | C |  
| Category | Web Server |  
| Release date | 2004/10/04 |  
| License | FreeBSD License |  
| Status | Active |  

Apache HTTP Serverに比べて高い処理性能、並列性能、省メモリを誇るサーバー用ソフトウェア。  
2021年のWebサーバの市場シェア調査結果によると、Nginxが首位、Apacheが2位となっている。  

---

## WordPress

| title | contents |
|-|-|
| No | 0022 |  
| Survey date | 2023/04/22 |  
| Official site | https://wordpress.org |  
| Source code | https://core.trac.wordpress.org/browser |  
| Language | PHP |  
| Category | CMS |  
| Release date | 2003/05/27 |  
| License | GPLv2 |  
| Status | Active |  

動的なブログを作成できるブログソフトウェア。  
テンプレート、プラグインも豊富で初心者でも簡単にブログを始めることができる。  

---

## MySQL

| title | contents |
|-|-|
| No | 0023 |  
| Survey date | 2023/04/23 |  
| Official site | https://www.mysql.com |  
| Source code | https://github.com/mysql/mysql-server |  
| Language | C, C++ |  
| Category | Database |  
| Release date | 1995/05/27 |  
| License | GPLv2 |  
| Status | Active |  

オープンソースのDBでは最も人気を誇る。  
現在はOracleが主に開発を行っている。  

---

## PostgreSQL

| title | contents |
|-|-|
| No | 0024 |  
| Survey date | 2023/04/24 |  
| Official site | https://www.postgresql.org |  
| Source code | https://git.postgresql.org/gitweb/?p=postgresql.git |  
| Language | C |  
| Category | Database |  
| Release date | 1996/07/08 |  
| License | PostgreSQL License |  
| Status | Active |  

拡張性とSQLへの準拠が特徴のRDBMS。  
元はPostquelというクエリ言語を用いており、名前もPOSTGRESだったがSQLサポートに伴いPostgreSQLと改名された。  

---

## MariaDB

| title | contents |
|-|-|
| No | 0025 |  
| Survey date | 2023/04/25 |  
| Official site | https://mariadb.org |  
| Source code | https://github.com/MariaDB/server |  
| Language | C, C++ |  
| Category | Database |  
| Release date | 2009/10/29 |  
| License | GPLv2 |  
| Status | Active |  

MySQLがオラクルに買収されたため、MySQLの作者がフォークして作ったもの。  
名前のMariaは作者の娘の名前に由来している。  

---

## Docker

| title | contents |
|-|-|
| No | 0026 |  
| Survey date | 2023/04/26 |  
| Official site | https://www.docker.com |  
| Source code | https://github.com/moby/moby |  
| Language | Go |  
| Category | Virtualization |  
| Release date | 2013/03/13 |  
| License | Apache License 2.0 |  
| Status | Active |  

コンテナ型仮想化環境を提供するデファクトスタンダードなソフトウェア。  
Dockerコンテナにより環境の差異を気にせずに開発できる。  

---

## React

| title | contents |
|-|-|
| No | 0027 |  
| Survey date | 2023/04/27 |  
| Official site | https://react.dev |  
| Source code | https://github.com/facebook/react |  
| Language | JavaScript |  
| Category | Web Library |  
| Release date | 2013/05/29 |  
| License | MIT License |  
| Status | Active |  

SPAを構築できるUIライブラリ。  
JSのUIライブラリとしてはデファクトスタンダードの立ち位置にある。  

---

## Vue.js

| title | contents |
|-|-|
| No | 0028 |  
| Survey date | 2023/04/28 |  
| Official site | https://vuejs.org |  
| Source code | https://github.com/vuejs/core |  
| Language | TypeScript |  
| Category | Web Library |  
| Release date | 2014/02 |  
| License | MIT License |  
| Status | Active |  

Reactと同じくSPAを構築できるUIライブラリ。  
他のJavaScriptライブラリを使用するプロジェクトへの導入において、容易になるように設計されている。  ]
また作者のEvan YouはViteも開発している。  

---

## Vite

| title | contents |
|-|-|
| No | 0029 |  
| Survey date | 2023/04/29 |  
| Official site | https://vitejs.dev |  
| Source code | https://github.com/vitejs/vite |  
| Language | TypeScript |  
| Category | Web Development Tool |  
| Release date | 2020/04/20 |  
| License | MIT License |  
| Status | Active |  

ローカル開発環境のサーバーを構築するソフトウェアで、高速に動作しホットリロードにも対応している。  
ヴィートと発音する。  

---

## Apache Maven

| title | contents |
|-|-|
| No | 0030 |  
| Survey date | 2023/04/30 |  
| Official site | https://maven.apache.org |  
| Source code | https://mvnrepository.com/artifact/org.apache.maven |  
| Language | Java |  
| Category | Build Tool |  
| Release date | 2004/06/13 |  
| License | Apache License 2.0 |  
| Status | Active |  

Java用のプロジェクト管理ツール。  
ソースコードのコンパイル、テスト、Javadoc生成、テストレポート生成、プロジェクトサイト生成、JAR生成、サーバへのデプロイ、WAR, EARファイル生成など様々な機能が用意されている。  

---

## Gradle

| title | contents |
|-|-|
| No | 0031 |  
| Survey date | 2023/05/01 |  
| Official site | https://gradle.org |  
| Source code | https://github.com/gradle/gradle |  
| Language | Java, Groovy |  
| Category | Build Tool |  
| Release date | 2008/04/21 |  
| License | Apache License 2.0 |  
| Status | Active |  

Groovyという言語を使用する自動化システム。  
Apache Mavenと違って増分ビルドが可能。  

---

## SQLite

| title | contents |
|-|-|
| No | 0032 |  
| Survey date | 2023/04/31 |  
| Official site | https://sqlite.org/index.html |  
| Source code | https://www.sqlite.org/src/doc/trunk/README.md |  
| Language | C |  
| Category | Database |  
| Release date | 2000/08/17 |  
| License | Public domain |  
| Status | Active |  

一般的なDBと違い、データの保存に単一のファイルのみを使用するRDBMS。  
そのため軽量であり、様々な用途で使用されている。  

---

## FFmpeg

| title | contents |
|-|-|
| No | 0033 |  
| Survey date | 2023/05/02 |  
| Official site | https://ffmpeg.org |  
| Source code | https://git.ffmpeg.org/ffmpeg.git |  
| Language | C, Assembly |  
| Category | Multimedia framework |  
| Release date | 2000/12/20 |  
| License | LGPL2.1 |  
| Status | Active |  

マルチメディアデータを記録、変換、再生するソフトウェア。  
様々なコーデックに対応しており、幅広く利用されている。  

---

## Blender

| title | contents |
|-|-|
| No | 0034 |  
| Survey date | 2023/05/03 |  
| Official site | https://www.blender.org |  
| Source code | https://projects.blender.org/blender/blender |  
| Language | C, C++, Python |  
| Category | 3D |  
| Release date | 1994/01/02 |  
| License | GPLv3 |  
| Status | Active |  

3DCG製作や2Dアニメーションを作れるソフトウェア。  
多機能かつ軽量なためアマチュアならずプロにも普及している。  
またPythonで操作することもできる。  

---

## KiCad

| title | contents |
|-|-|
| No | 0035 |  
| Survey date | 2023/05/04 |  
| Official site | https://www.kicad.org |  
| Source code | https://gitlab.com/kicad/code/kicad |  
| Language | C, C++ |  
| Category | EDA |  
| Release date | 1992 |  
| License | GPLv3 |  
| Status | Active |  

電子回路設計のためのCADツール。  
回路図エディタの他、PCBレイアウトや3Dビューワーなどがある。  

---

## Audacity

| title | contents |
|-|-|
| No | 0036 |  
| Survey date | 2023/05/05 |  
| Official site | https://www.audacityteam.org |  
| Source code | https://github.com/audacity/audacity |  
| Language | C, C++ |  
| Category | Audio Editor |  
| Release date | 2000/05/28 |  
| License | GPLv2 |  
| Status | Active |  

オーディオファイルや録音した音声の編集やミキシング、フィルターの適応などができる多機能なオーディオエディター。  
フォーク版として、[Dark Audacity](http://www.darkaudacity.com)がある。  

---

## Next.js

| title | contents |
|-|-|
| No | 0037 |  
| Survey date | 2023/05/06 |  
| Official site | https://nextjs.org |  
| Source code | https://github.com/vercel/next.js |  
| Language | JavaScript, TypeScript |  
| Category | Web framefork |  
| Release date | 2016/10/25 |  
| License | MIT |  
| Status | Active |  

Reactベースのフレームワークであり、サーバーサイドレンダリング(SSR)やスタティックジェネレート(SG)、ファイルベースのルーティングなど豊富な機能を提供する。  

---

## Angular

| title | contents |
|-|-|
| No | 0038 |  
| Survey date | 2023/05/07 |  
| Official site | https://angular.io |  
| Source code | https://github.com/angular/angular |  
| Language | TypeScript |  
| Category | Web framework |  
| Release date | 2016/09/14 |  
| License | MIT |  
| Status | Active |  

Googleが開発を主導するWebフレームワーク。  
元々はAngularJSと呼ばれていたが、パフォーマンスの不満と使いにくい欠点があったため一から作り直しAngularとなった。  

---

## Node.js

| title | contents |
|-|-|
| No | 0039 |  
| Survey date | 2023/05/08 |  
| Official site | https://nodejs.org |  
| Source code | https://github.com/nodejs/node |  
| Language | JavaScript, C++ |  
| Category | Runtime environment |  
| Release date | 2009/05/27 |  
| License | MIT |  
| Status | Active |  

サーバーサイドのJavaScript実行環境。  
だが最近ではクライアントサイドでのJavaScript開発環境としても幅広く用いられる。  

---

## Deno

| title | contents |
|-|-|
| No | 0040 |  
| Survey date | 2023/05/09 |  
| Official site | https://deno.com |  
| Source code | https://github.com/denoland/deno |  
| Language | Rust, JavaScript, TypeScript |  
| Category | Runtime environment |  
| Release date | 2018/05/13 |  
| License | MIT |  
| Status | Active |  

Node.jsの作者がNode.jsの反省点を生かし作った新たなJavaScript実行環境で、モダンかつセキュアな改善が盛り込まれている。  
初期はNode.jsとは非互換だったが、2022年頃から互換対応し始めた。  

---

## Bun

| title | contents |
|-|-|
| No | 0041 |  
| Survey date | 2023/05/10 |  
| Official site | https://bun.sh |  
| Source code | https://github.com/oven-sh/bun |  
| Language | Zig, C++, JavaScript |  
| Category | Runtime environment |  
| Release date | 2021/09/14 |  
| License | MIT |  
| Status | Active |  

Node.jsと互換性をもつJavaScript実行環境。  
Zigという言語で実装されており動作が高速。  

---

## V8

| title | contents |
|-|-|
| No | 0042 |  
| Survey date | 2023/05/11 |  
| Official site | https://v8.dev |  
| Source code | https://chromium.googlesource.com/v8/v8 |  
| Language | C++ |  
| Category | JavaScript engine |  
| Release date | 2008/09/02 |  
| License | MIT |  
| Status | Active |  

Googleが開発を主導するJIT型のJavaScriptエンジン。  
Chromiumの他Node.jsやDenoにも採用されている。  

---

## QEMU

| title | contents |
|-|-|
| No | 0043 |  
| Survey date | 2023/05/12 |  
| Official site | https://www.qemu.org |  
| Source code | https://gitlab.com/qemu-project/qemu |  
| Language | C |  
| Category | Emulator |  
| Release date | 2003/ |  
| License | GPLv2 |  
| Status | Active |  

プロセッサーエミュレーターで、x86やPowerPC、ARMなど様々なアーキテクチャに対応している。  
AndroidのSDKにも利用されている。  

---

## KVM

| title | contents |
|-|-|
| No | 0044 |  
| Survey date | 2023/05/13 |  
| Official site | https://www.linux-kvm.org/page/Main_Page |  
| Source code | https://git.kernel.org/pub/scm/virt/kvm/kvm.git |  
| Language | C |  
| Category | Hypervisor |  
| Release date | 2006/10 |  
| License | GPL |  
| Status | Active |  

正式にはKernel-based Virtual Machineと言い、カーネルベースの仮想化モジュール。  
KVM自体はエミュレーションは全く実行しないため、エミュレーションの実行にQEMUと組み合わせて使用されることが多い。  

---

## NumPy

| title | contents |
|-|-|
| No | 0045 |  
| Survey date | 2023/05/14 |  
| Official site | https://numpy.org |  
| Source code | github.com/numpy/numpy |  
| Language | Python, C |  
| Category | Numerical analysis |  
| Release date | 1995 |  
| License | BSD |  
| Status | Active |  

Pythonにて数値計算を行うライブラリで、高水準の数学計算関数を数多く提供する。  
NumPy自体はC言語で書かれているため動作は高速。  

---

## SciPy

| title | contents |
|-|-|
| No | 0046 |  
| Survey date | 2023/05/15 |  
| Official site | https://scipy.org |  
| Source code | https://github.com/scipy/scipy |  
| Language | Python, Fortran, C |  
| Category | Numerical analysis |  
| Release date | 2001 |  
| License | BSD |  
| Status | Active |  

Pythonにて高度な数学、科学、工業計算を扱うライブラリ。  
統計、最適化、積分、線形代数、フーリエ変換、信号・イメージ処理、遺伝的アルゴリズム、常微分方程式ソルバ、特殊関数、その他のモジュールを提供している。  

---

## scikit-learn

| title | contents |
|-|-|
| No | 0047 |  
| Survey date | 2023/05/16 |  
| Official site | https://scikit-learn.org |  
| Source code | https://github.com/scikit-learn/scikit-learn |  
| Language | Python |  
| Category | Machine learning library |  
| Release date | 2007/1 |  
| License | New BSD |  
| Status | Active |  

教師あり学習、教師なし学習に対応した機械学習ライブラリ。  
SVM、ランダムフォレスト、GBなどの回帰、分類、クラスタリングアルゴリズムを備えている。  

---

## PyTorch

| title | contents |
|-|-|
| No | 0048 |  
| Survey date | 2023/05/17 |  
| Official site | https://pytorch.org |  
| Source code | https://github.com/pytorch/pytorch |  
| Language | Python, C++ |  
| Category | Machine learning library |  
| Release date | 2016/09 |  
| License | BSD-3 |  
| Status | Active |  

TorchというLua製の機械学習ライブラリをPythonに移植したもの。  
Facebookが開発を主導しており、機械学習ライブラリのシェア率ではNo1。  

---

## TensorFlow

| title | contents |
|-|-|
| No | 0049 |  
| Survey date | 2023/05/18 |  
| Official site | https://tensorflow.org |  
| Source code | https://github.com/tensorflow/tensorflow |  
| Language | Python, C++ |  
| Category | Machine learning library |  
| Release date | 2015/11/09 |  
| License | Apache 2.0 |  
| Status | Active |  

Googleが開発を主導する機械学習ライブラリ。  
運用のサポートが手厚く、ビスネス用途で数多く使われている。  

---

## Keras

| title | contents |
|-|-|
| No | 0050 |  
| Survey date | 2023/05/19 |  
| Official site | https://keras.io |  
| Source code | https://github.com/keras-team/keras |  
| Language | Python |  
| Category | Machine learning library |  
| Release date | 2015/03/27 |  
| License | Apache 2.0 |  
| Status | Active |  

最小限、拡張可能性に重きをおいた機械学習ライブラリ。  
メンテナがGoogleのエンジニアであり、TensorFlow 2から同梱されるようになった。  

---

## Chainer

| title | contents |
|-|-|
| No | 0051 |  
| Survey date | 2023/05/20 |  
| Official site | https://chainer.org |  
| Source code | https://github.com/chainer/chainer |  
| Language | Python, C++ |  
| Category | Machine learning library |  
| Release date | 2015/06/09 |  
| License | MIT |  
| Status | Inactive |  

日本のスタートアップ企業PFNが開発していた機械学習ライブラリ。  
Pytorchにも大きな影響を与えたが、英語圏の勢いに負けてしまい開発終了することになった。  

---

## ncurses

| title | contents |
|-|-|
| No | 0052 |  
| Survey date | 2023/05/21 |  
| Official site | https://invisible-island.net/ncurses/announce.html |  
| Source code | https://invisible-mirror.net/archives/ncurses |  
| Language | C |  
| Category | Widget toolkit |  
| Release date | 1993 |  
| License | X11 |  
| Status | Active |  

TUIを提供するライブラリ。  
cursesの代替を目指して開発され今では最も普及している。  

---

## JAX

| title | contents |
|-|-|
| No | 0053 |  
| Survey date | 2023/05/22 |  
| Official site | https://jax.readthedocs.io/en/latest |  
| Source code | https://github.com/google/jax |  
| Language | Python |  
| Category | Machine learning library |  
| Release date | 2022/05/16 |  
| License | Apache2.0 |  
| Status | Active |  

Googleが開発を行う機械学習ライブラリ。  
標準でGPUにも対応しており、自動微分やJITコンパイラ、SPMDプログラミングなどの便利な機能を提供している。  

---

## Icarus Verilog

| title | contents |
|-|-|
| No | 0054 |  
| Survey date | 2023/05/23 |  
| Official site | https://bleyer.org/icarus |  
| Source code | https://github.com/steveicarus/iverilog |  
| Language | C++, Verilog, C |  
| Category | Verilog Simulator |  
| Release date | 1998 |  
| License | GPL2.0 |  
| Status | Active |  

Verilogシミュレーター。  
System Verilogにも対応している。  
また、GNUwaveなどで波形を見ることもできる。  

---

## Simple DirectMedia Layer

| title | contents |
|-|-|
| No | 0055 |  
| Survey date | 2023/05/24 |  
| Official site | https://www.libsdl.org |  
| Source code | https://github.com/libsdl-org/SDL |  
| Language | C, C++ |  
| Category | Multimedia library |  
| Release date | 1998 |  
| License | Zlib license |  
| Status | Active |  

グラフィックの描画やサウンドの再生などのAPIを提供するマルチメディアライブラリ。  
JavaやRust、phpなどの様々な言語のラッパーが存在する。  

---

## wgpu

| title | contents |
|-|-|
| No | 0056 |  
| Survey date | 2023/05/25 |  
| Official site | https://wgpu.rs |  
| Source code | https://github.com/gfx-rs/wgpu |  
| Language | Rust |  
| Category | Graphics API |  
| Release date | 2019 |  
| License | Apache-2.0, MIT licenses |  
| Status | Active |  

Rustで書かれたWebGPUのAPI。  
WebGPUベースなのでクロスプラットフォームであり、様々なグラフィックAPIに変換される。  

---

## OpenCV

| title | contents |
|-|-|
| No | 0057 |  
| Survey date | 2023/05/26 |  
| Official site | https://opencv.org |  
| Source code | https://github.com/opencv/opencv |  
| Language | C++ |  
| Category | Image processing library |  
| Release date | 2000/06 |  
| License | Apache2.0 |  
| Status | Active |  

元々はIntelが開発していた画像処理ライブラリ。  
Pythonでもopencv-pythonとしてパッケージが提供されている。  

---

## Rye

| title | contents |
|-|-|
| No | 0058 |  
| Survey date | 2023/05/27 |  
| Official site | https://rye-up.com |  
| Source code | https://github.com/mitsuhiko/rye |  
| Language | Rust |  
| Category | Package manager |  
| Release date | 2023/05/17 |  
| License | MIT |  
| Status | Active |  

Flaskの開発者が開発中のRust製Pythonパッケージマネージャー。  
Pythonのバージョン管理からvirtualenvsの設定まで行える。  
pyenv + poetry のようなイメージ。  

---

## Poetry

| title | contents |
|-|-|
| No | 0059 |  
| Survey date | 2023/05/28 |  
| Official site | https://python-poetry.org |  
| Source code | https://github.com/python-poetry/poetry |  
| Language | Python |  
| Category | Package manager |  
| Release date | 2018/03/01 |  
| License | MIT |  
| Status | Active |  

pyproject.tomlに対応したパッケージマネージャー。  
pipと違い自動的に仮想環境が構築される。  

---

## Pipenv

| title | contents |
|-|-|
| No | 0060 |  
| Survey date | 2023/05/29 |  
| Official site | https://pipenv.pypa.io |  
| Source code | https://github.com/pypa/pipenv |  
| Language | Python |  
| Category | Package manager |  
| Release date | 2017/01/21 |  
| License | MIT |  
| Status | Active |  

 PyPA (Python Packaging Authority) というコミュニティが開発しているパッケージマネージャー。  
 Pipfileという独自のファイルで依存関係を管理する。  

---

## pyenv

| title | contents |
|-|-|
| No | 0061 |  
| Survey date | 2023/05/30 |  
| Official site | https://github.com/pyenv/pyenv |  
| Source code | https://github.com/pyenv/pyenv |  
| Language | Python |  
| Category | Environment manager |  
| Release date | 2011/10/02 |  
| License | MIT |  
| Status | Active |  

 Pythonのバージョンの切り替えを簡単に行えるツール。  
 ディレクトリごとにバージョンを切り替えることもできる。  

---

## ruff

| title | contents |
|-|-|
| No | 0062 |  
| Survey date | 2023/05/31 |  
| Official site | https://beta.ruff.rs |  
| Source code | https://github.com/charliermarsh/ruff |  
| Language | Rust |  
| Category | Linter |  
| Release date | 2022/08/30 |  
| License | MIT |  
| Status | Active |  

Rustで書かれたPythonのリンター。  
flake8に比べても格段に早い。  

---

## flake8

| title | contents |
|-|-|
| No | 0063 |  
| Survey date | 2023/06/01 |  
| Official site | https://flake8.pycqa.org |  
| Source code | https://github.com/PyCQA/flake8 |  
| Language | Python |  
| Category | Linter |  
| Release date | 2010/02/15 |  
| License | MIT |  
| Status | Active |  

PyPAが管理しているプロジェクト。  
以下の3つのツールから構成されている。  
- pyflakes    : コードのエラーチェック  
- pycodestyle : PEP8に準拠しているかチェック  
- mccabe      : 循環的複雑度のチェック  

---

## pytest

| title | contents |
|-|-|
| No | 0064 |  
| Survey date | 2023/06/02 |  
| Official site | https://docs.pytest.org |  
| Source code | https://github.com/pytest-dev/pytest |  
| Language | Python |  
| Category | Testing framework |  
| Release date | 2007/01 |  
| License | MIT |  
| Status | Active |  

ユニットテスト、統合テスト、E2Eテスト、機能テストを実行できるフレームワーク。  
現在主流なフレームワークであり、標準ライブラリであるunittestより便利。  

---

## mypy

| title | contents |
|-|-|
| No | 0065 |  
| Survey date | 2023/06/03 |  
| Official site | https://mypy-lang.org |  
| Source code | https://github.com/python/mypy |  
| Language | Python |  
| Category | Type checker |  
| Release date | 2009/09/09 |  
| License | MIT |  
| Status | Active |  

Pythonで静的型検査が行えるライブラリ。  
コードに型ヒントを付与する必要がある。  

---

## OpenAL Soft

| title | contents |
|-|-|
| No | 0066 |  
| Survey date | 2023/06/04 |  
| Official site | https://openal-soft.org |  
| Source code | https://github.com/kcat/openal-soft |  
| Language | C++ |  
| Category | Sound library |  
| Release date | 2007/12/15 |  
| License | GPLv2 |  
| Status | Active |  

Open ALというクロスプラットフォームのオーディオAPIを実装しているライブラリ。  
3Dオーディオを表現することができる。  

---

## Lightweight Java Game Library

| title | contents |
|-|-|
| No | 0067 |  
| Survey date | 2023/06/05 |  
| Official site | https://www.lwjgl.org |  
| Source code | https://github.com/LWJGL/lwjgl3 |  
| Language | Java |  
| Category | Game library |  
| Release date | 2007/02/04 |  
| License | BSD |  
| Status | Active |  

OpenGL/Vulkan, OpenAL, OpenCLをJavaから扱えるようにしたライブラリ。  
高いパフォーマンスと型安全で使いやすいAPIを提供する。  

---

## tox

| title | contents |
|-|-|
| No | 0068 |  
| Survey date | 2023/06/06 |  
| Official site | https://tox.wiki |  
| Source code | https://github.com/tox-dev/tox |  
| Language | Python |  
| Category | Test command line tool |  
| Release date | 2010/07/12 |  
| License | MIT |  
| Status | Active |  

複数のバージョンのPythonでテストを行えるようにするライブラリー。  

---

## black

| title | contents |
|-|-|
| No | 0069 |  
| Survey date | 2023/06/07 |  
| Official site | https://black.readthedocs.io |  
| Source code | https://github.com/psf/black |  
| Language | Python |  
| Category | Formatter |  
| Release date | 2018/03/15 |  
| License | MIT |  
| Status | Active |  

pep8に準拠したフォーマットに整形してくれるフォーマッター。  
設定項目が1行あたりの文字数の変更しかない。  
チーム内でフォーマッターの設定を議論する必要がないので効率的。  

---

## isort

| title | contents |
|-|-|
| No | 0070 |  
| Survey date | 2023/06/08 |  
| Official site | https://pycqa.github.io/isort |  
| Source code | https://github.com/PyCQA/isort |  
| Language | Python |  
| Category | Formatter |  
| Release date | 2013/09/05 |  
| License | MIT |  
| Status | Active |  

import文をPEP8に準拠した適切な順番に並び替えるフォーマッター。  
よくblackやruffと組み合わせて使用する。  

---

## pysen

| title | contents |
|-|-|
| No | 0071 |  
| Survey date | 2023/06/09 |  
| Official site | https://github.com/pfnet/pysen |  
| Source code | https://github.com/pfnet/pysen |  
| Language | Python |  
| Category | Utility |  
| Release date | 2021/05/22 |  
| License | MIT |  
| Status | Active |  

flake8、mypy、black 、isortのlint、formatを一度に実行できるライブラリ。  
全て.pyproject.tomlに設定を記述するため設定ファイルがたくさん生成されない。  

---
