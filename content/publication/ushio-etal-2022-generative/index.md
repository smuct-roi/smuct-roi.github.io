---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Generative Language Models for Paragraph-Level Question Generation
subtitle: ''
summary: ''
authors:
- ushioa
- alvamanchegof
- camachocolladosj
tags: []
categories: []
date: '2022-12-01'
lastmod: 2023-02-14T14:22:52Z
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
publishDate: '2023-02-14T14:22:51.869050Z'
publication_types:
- '1'
abstract: Powerful generative models have led to recent progress in question generation
  (QG). However, it is difficult to measure advances in QG research since there are
  no standardized resources that allow a uniform comparison among approaches. In this
  paper, we introduce QG-Bench, a multilingual and multidomain benchmark for QG that
  unifies existing question answering datasets by converting them to a standard QG
  setting. It includes general-purpose datasets such as SQuAD for English, datasets
  from ten domains and two styles, as well as datasets in eight different languages.
  Using QG-Bench as a reference, we perform an extensive analysis of the capabilities
  of language models for the task. First, we propose robust QG baselines based on
  fine-tuning generative language models. Then, we complement automatic evaluation
  based on standard metrics with an extensive manual evaluation, which in turn sheds
  light on the difficulty of evaluating QG models. Finally, we analyse both the domain
  adaptability of these models as well as the effectiveness of multilingual models
  in languages other than English.QG-Bench is released along with the fine-tuned models
  presented in the paper (https://github.com/asahi417/lm-question-generation), which
  are also available as a demo (https://autoqg.net/).
publication: '*Proceedings of the 2022 Conference on Empirical Methods in Natural
  Language Processing*'
publication_short: '*EMNLP 2022*'
url_pdf: https://aclanthology.org/2022.emnlp-main.42.pdf
---
