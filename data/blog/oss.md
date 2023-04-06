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

