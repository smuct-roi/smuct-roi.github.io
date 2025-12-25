---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Learning Company Embeddings from Annual Reports for Fine-grained Industry Characterization"
authors:
- Tomoki Ito
- camachocolladosj
- Hiroki Sakaji
- schockaerts
date: 2020-07-01
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2022-02-19T23:01:53Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the Second Workshop on Financial Technology and Natural Language Processing"
publication_short: "*FinNLP 2020*"

abstract: "Organizing companies by industry segment (e.g. artificial intelligence, healthcare or fintech) is useful for analyzing stock market performance and for designing theme base investment funds, among others. Current practice is to manually assign companies to sectors or industries from a small predefined list, which has two key limitations. First, due to the manual effort involved, this strategy is only feasible for relatively mainstream industry segments, and can thus not easily be used for niche or emerging topics. Second, the use of hard label assignments ignores the fact that different companies will be more or less exposed to a particular segment. To address these limitations, we propose to learn vector representations of companies based on their annual reports. The key challenge is to distill the relevant information from these reports for characterizing their industries, since annual reports also contain a lot of information which is not relevant for our purpose. To this end, we introduce a multi-task learning strategy, which is based on fine-tuning the BERT language model on (i) existing sector labels and (ii) stock market performance. Experiments in both English and Japanese demonstrate the usefulness of this strategy"

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

url_pdf: https://aclanthology.org/2020.finnlp-1.5.pdf
url_code: https://github.com/itomoki430/Company2Vec
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
