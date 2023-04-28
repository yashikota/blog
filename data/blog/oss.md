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

