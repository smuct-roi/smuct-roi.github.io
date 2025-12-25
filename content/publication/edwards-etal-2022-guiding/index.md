---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Guiding Generative Language Models for Data Augmentation in Few-Shot Text Classification
subtitle: ''
summary: ''
authors:
- edwardsa
- ushioa
- camachocolladosj
- deribaupierreh
- preecea
tags: []
categories: []
date: '2022-12-01'
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
publishDate: '2023-02-14T15:35:03.124633Z'
publication_types:
- '1'
abstract: Data augmentation techniques are widely used for enhancing the performance
  of machine learning models by tackling class imbalance issues and data sparsity.
  State-of-the-art generative language models have been shown to provide significant
  gains across different NLP tasks. However, their applicability to data augmentation
  for text classification tasks in few-shot settings have not been fully explored,
  especially for specialised domains. In this paper, we leverage GPT-2 (Radford et
  al, 2019) for generating artificial training instances in order to improve classification
  performance. Our aim is to analyse the impact the selection process of seed training
  examples has over the quality of GPT-generated samples and consequently the classifier
  performance. We propose a human-in-the-loop approach for selecting seed samples.
  Further, we compare the approach to other seed selection strategies that exploit
  the characteristics of specialised domains such as human-created class hierarchical
  structure and the presence of noun phrases. Our results show that fine-tuning GPT-2
  in a handful of label instances leads to consistent classification improvements
  and outperform competitive baselines. The seed selection strategies developed in
  this work lead to significant improvements over random seed selection for specialised
  domains. We show that guiding text generation through domain expert selection can
  lead to further improvements, which opens up interesting research avenues for combining
  generative models and active learning.
publication: '*Proceedings of the Fourth Workshop on Data Science with Human-in-the-Loop
  (Language Advances)*'
publication_short: '*DaSH 2022*'
url_pdf: https://aclanthology.org/2022.dash-1.8.pdf
---
