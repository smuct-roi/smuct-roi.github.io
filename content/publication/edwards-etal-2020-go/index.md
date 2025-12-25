---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Go Simple and Pre-Train on Domain-Specific Corpora: On the Role of Training Data for Text Classification"
authors:
- edwardsa
- camachocolladosj
- deribaupierreh
- preecea
date: 2020-12-01
doi: "10.18653/v1/2020.coling-main.481"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-02-19T20:03:57Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 28th International Conference on Computational Linguistics"
publication_short: "*COLING 2020*"

abstract: "Pre-trained language models provide the foundations for state-of-the-art performance across a wide range of natural language processing tasks, including text classification. However, most classification datasets assume a large amount labeled data, which is commonly not the case in practical settings. In particular, in this paper we compare the performance of a light-weight linear classifier based on word embeddings, i.e., fastText (Joulin et al., 2017), versus a pre-trained language model, i.e., BERT (Devlin et al., 2019), across a wide range of datasets and classification tasks. In general, results show the importance of domain-specific unlabeled data, both in the form of word embeddings or language models. As for the comparison, BERT outperforms all baselines in standard datasets with large training sets. However, in settings with small training datasets a simple method like fastText coupled with domain-specific word embeddings performs equally well or better than BERT, even when pre-trained on domain-specific data."

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

url_pdf: https://aclanthology.org/2020.coling-main.481.pdf
url_code: https://gitlab.com/Aleks-Edwards/coling
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
