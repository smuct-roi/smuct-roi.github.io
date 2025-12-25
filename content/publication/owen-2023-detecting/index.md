---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'Enabling Early Health Care Intervention by Detecting Depression in Users of Web-Based Forums using Language Models: Longitudinal Analysis and Evaluation'
subtitle: ''
summary: ''
authors:
- owend
- antypasd
- Athanasios Hassoulas
- Antonio Pardiñas
- espinosaankel
- camachocolladosj
tags: []
categories: []
date: '2023-01-01'
lastmod: 2023-03-27T15:35:02Z
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
publishDate: '2023-02-14T15:35:02.368559Z'
publication_types:
- "2"
abstract: "Background: Major depressive disorder is a common mental disorder affecting 5% of adults worldwide. Early contact with health care services is critical for achieving accurate diagnosis and improving patient outcomes. Key symptoms of major depressive disorder (depression hereafter) such as cognitive distortions are observed in verbal communication, which can also manifest in the structure of written language. Thus, the automatic analysis of text outputs may provide opportunities for early intervention in settings where written communication is rich and regular, such as social media and web-based forums. Objective: The objective of this study was 2-fold. We sought to gauge the effectiveness of different machine learning approaches to identify users of the mass web-based forum Reddit, who eventually disclose a diagnosis of depression. We then aimed to determine whether the time between a forum post and a depression diagnosis date was a relevant factor in performing this detection. Methods: A total of 2 Reddit data sets containing posts belonging to users with and without a history of depression diagnosis were obtained. The intersection of these data sets provided users with an estimated date of depression diagnosis. This derived data set was used as an input for several machine learning classifiers, including transformer-based language models (LMs). Results: Bidirectional Encoder Representations from Transformers (BERT) and MentalBERT transformer-based LMs proved the most effective in distinguishing forum users with a known depression diagnosis from those without. They each obtained a mean F1-score of 0.64 across the experimental setups used for binary classification. The results also suggested that the final 12 to 16 weeks (about 3-4 months) of posts before a depressed user's estimated diagnosis date are the most indicative of their illness, with data before that period not helping the models detect more accurately. Furthermore, in the 4- to 8-week period before the user's estimated diagnosis date, their posts exhibited more negative sentiment than any other 4-week period in their post history. Conclusions: Transformer-based LMs may be used on data from web-based social media forums to identify users at risk for psychiatric conditions such as depression. Language features picked up by these classifiers might predate depression onset by weeks to months, enabling proactive mental health care interventions to support those at risk for this condition."

publication: '*JMIR AI*'

url_pdf: https://ai.jmir.org/2023/1/e41205
---
