---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Neural Readability Pairwise Ranking for Sentences in Italian Administrative
  Language
subtitle: ''
summary: ''
authors:
- Martina Miliani
- Serena Auriemma
- alvamanchegof
- Alessandro Lenci
tags: []
categories: []
date: '2022-11-01'
lastmod: 2023-02-14T14:22:53Z
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2023-02-14T14:22:52.773322Z'
publication_types:
- '1'
abstract: Automatic Readability Assessment aims at assigning a complexity level to
  a given text, which could help improve the accessibility to information in specific
  domains, such as the administrative one. In this paper, we investigate the behavior
  of a Neural Pairwise Ranking Model (NPRM) for sentence-level readability assessment
  of Italian administrative texts. To deal with data scarcity, we experiment with
  cross-lingual, cross- and in-domain approaches, and test our models on Admin-It,
  a new parallel corpus in the Italian administrative language, containing sentences
  simplified using three different rewriting strategies. We show that NPRMs are effective
  in zero-shot scenarios (~0.78 ranking accuracy), especially with ranking pairs containing
  simplifications produced by overall rewriting at the sentence-level, and that the
  best results are obtained by adding in-domain data (achieving perfect performance
  for such sentence pairs). Finally, we investigate where NPRMs failed, showing that
  the characteristics of the training data, rather than its size, have a bigger effect
  on a model′s performance.
publication: '*Proceedings of the 2nd Conference of the Asia-Pacific Chapter of the
  Association for Computational Linguistics and the 12th International Joint Conference
  on Natural Language Processing*'
publication_short: '*AACL-IJCNLP 2022*'
url_pdf: https://aclanthology.org/2022.aacl-main.63.pdf
---
