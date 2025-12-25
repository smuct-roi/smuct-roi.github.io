---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'Named Entity Recognition in Twitter: A Dataset and Analysis on Short-Term
  Temporal Shifts'
subtitle: ''
summary: ''
authors:
- ushioa
- Francesco Barbieri
- Vitor Sousa
- Leonardo Neves
- camachocolladosj
tags: []
categories: []
date: '2022-11-01'
lastmod: 2023-02-14T15:35:03Z
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
publishDate: '2023-02-14T15:35:03.439396Z'
publication_types:
- '1'
abstract: 'Recent progress in language model pre-training has led to important improvements
  in Named Entity Recognition (NER). Nonetheless, this progress has been mainly tested
  in well-formatted documents such as news, Wikipedia, or scientific articles. In
  social media the landscape is different, in which it adds another layer of complexity
  due to its noisy and dynamic nature. In this paper, we focus on NER in Twitter,
  one of the largest social media platforms, and construct a new NER dataset, TweetNER7,
  which contains seven entity types annotated over 11,382 tweets from September 2019
  to August 2021. The dataset was constructed by carefully distributing the tweets
  over time and taking representative trends as a basis. Along with the dataset, we
  provide a set of language model baselines and perform an analysis on the language
  model performance on the task, especially analyzing the impact of different time
  periods. In particular, we focus on three important temporal aspects in our analysis:
  short-term degradation of NER models over time, strategies to fine-tune a language
  model over different periods, and self-labeling as an alternative to lack of recently-labeled
  data. TweetNER7 is released publicly (https://huggingface.co/datasets/tner/tweetner7)
  along with the models fine-tuned on it (NER models have been integrated into TweetNLP
  and can be found at https://github.com/asahi417/tner/tree/master/examples/tweetner7_paper).'
publication: '*Proceedings of the 2nd Conference of the Asia-Pacific Chapter of the
  Association for Computational Linguistics and the 12th International Joint Conference
  on Natural Language Processing (Volume 1: Long Papers)*'
publication_short: '*AACL-IJCNLP 2022*'
url_pdf: https://aclanthology.org/2022.aacl-main.25.pdf
---
