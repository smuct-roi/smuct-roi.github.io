---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Probing Relational Knowledge in Language Models via Word Analogies
subtitle: ''
summary: ''
authors:
- rezaeek
- camachocolladosj
tags: []
categories: []
date: '2022-12-01'
lastmod: 2023-02-14T15:35:04Z
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
publishDate: '2023-02-14T15:35:03.693178Z'
publication_types:
- '1'
abstract: Understanding relational knowledge plays an integral part in natural language
  comprehension. When it comes to pre-trained language models (PLM), prior work has
  been focusing on probing relational knowledge this by filling the blanks in pre-defined
  prompts such as ``The capital of France is ---''. However, these probes may be affected
  by the co-occurrence of target relation words and entities (e.g. ``capital″, ``France″
  and ``Paris″) in the pre-training corpus. In this work, we extend these probing
  methodologies leveraging analogical proportions as a proxy to probe relational knowledge
  in transformer-based PLMs without directly presenting the desired relation. In particular,
  we analysed the ability of PLMs to understand (1) the directionality of a given
  relation (e.g. Paris-France is not the same as France-Paris); (2) the ability to
  distinguish types on a given relation (both France and Japan are countries); and
  (3) the relation itself (Paris is the capital of France, but not Rome). Our results
  show how PLMs are extremely accurate at (1) and (2), but have clear room for improvement
  for (3). To better understand the reasons behind this behaviour and mistakes made
  by PLMs, we provide an extended quantitative analysis based on relevant factors
  such as frequency.
publication: '*Findings of the Association for Computational Linguistics: EMNLP 2022*'
publication: '*Findings EMNLP 2022*'
url_pdf: https://aclanthology.org/2022.findings-emnlp.289.pdf
---
