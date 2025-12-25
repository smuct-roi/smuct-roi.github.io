---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Exploiting stacked embeddings with LSTM for multilingual humor and irony detection"
authors:
- Radiathun Tasnia 
- Nabila Ayman
- Afrin Sultana
- Abu Nowshed Chy 
author_notes:
- "Equal contribution"
- "Equal contribution"
- "Equal contribution"
date: 2023-03-03
doi: 

# Schedule page publish date (NOT publication's date).
#publishDate: 2022-12-16T23:41:36Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Social Network Analysis and Mining"
publication_short: "*Social Network Analysis and Mining 2023*"
# **[On review]**
abstract: "Humor and irony are types of communication that evoke laughter or contain hidden sarcasm. The opportunity to diversely express people’s opinions on social media using humorous content increased its popularity. Due to subjective aspects, humor may vary to gender, profession, generation, and classes of people. Detecting and analyzing humorous and ironic emplacement of informal user-generated content is crucial for various NLP and opinion mining tasks due to its perplexing characteristics. However, due to the idiosyncratic characteristics of informal texts, it is a challenging task to generate an effective representation of texts to understand the inherent contexts properly. In this paper, we propose a neural network architecture that couples a stacked embeddings strategy on top of the LSTM layer for the effective representation of textual context and determine the humorous and ironic orientation of texts in an efficient manner. Here, we perform the stacking of various fine-tuned word embeddings and transformer models including GloVe, ELMo, BERT, and Flair’s contextual embeddings to extract the diversified contextual features of texts. Later, we use the LSTM network on top of it to generate the unified document vector (UDV). Finally, the UDV is passed to the multiple feed-forward linear architectures for attaining the final prediction labels. We present the performance analysis of our proposed approach on benchmark datasets of English and Spanish language. Experimental outcomes exhibited the preponderance of our model over most of the state-of-the-art methods."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://link.springer.com/article/10.1007/s13278-023-01049-0
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
