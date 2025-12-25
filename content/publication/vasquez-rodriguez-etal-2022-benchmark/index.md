---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "A Benchmark for Neural Readability Assessment of Texts in Spanish"
subtitle: ''
summary: ''
authors:
- Laura Vásquez-Rodrı́guez
- Pedro-Manuel Cuenca-Jiménez
- Sergio Morales-Esquivel
- alvamanchegof
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
publishDate: '2023-02-14T14:22:52.486936Z'
publication_types:
- '1'
abstract: We release a new benchmark for Automated Readability Assessment (ARA) of
  texts in Spanish. We combined existing corpora with suitable texts collected from
  the Web, thus creating the largest available dataset for ARA of Spanish texts. All
  data was pre-processed and categorised to allow experimenting with ARA models that
  make predictions at two (simple and complex) or three (basic, intermediate, and
  advanced) readability levels, and at two text granularities (paragraphs and sentences).
  An analysis based on readability indices shows that our proposed datasets groupings
  are suitable for their designated readability level. We use our benchmark to train
  neural ARA models based on BERT in zero-shot, few-shot, and cross-lingual settings.
  Results show that either a monolingual or multilingual pre-trained model can achieve
  good results when fine-tuned in language-specific data. In addition, all mod- els
  decrease their performance when predicting three classes instead of two, showing
  opportunities for the development of better ARA models for Spanish with existing
  resources.
publication: '*Proceedings of the Workshop on Text Simplification, Accessibility,
  and Readability (TSAR-2022)*'
publication_short: '*TSAR 2022*'
url_pdf: https://aclanthology.org/2022.tsar-1.18.pdf
---
