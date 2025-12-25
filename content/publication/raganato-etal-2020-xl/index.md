---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "XL-WiC: A Multilingual Benchmark for Evaluating Semantic Contextualization"
authors:
- Alessandro Raganato
- Tommaso Pasini
- camachocolladosj
- Mohammad Taher Pilehvar
date: 2020-11-01
doi: "10.18653/v1/2020.emnlp-main.584"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-02-19T22:55:06Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)"
publication_short: "*EMNLP 2020*"

abstract: "The ability to correctly model distinct meanings of a word is crucial for the effectiveness of semantic representation techniques. However, most existing evaluation benchmarks for assessing this criterion are tied to sense inventories (usually WordNet), restricting their usage to a small subset of knowledge-based representation techniques. The Word-in-Context dataset (WiC) addresses the dependence on sense inventories by reformulating the standard disambiguation task as a binary classification problem; but, it is limited to the English language. We put forward a large multilingual benchmark, XL-WiC, featuring gold standards in 12 new languages from varied language families and with different degrees of resource availability, opening room for evaluation scenarios such as zero-shot cross-lingual transfer. We perform a series of experiments to determine the reliability of the datasets and to set performance baselines for several recent contextualized multilingual models. Experimental results show that even when no tagged instances are available for a target language, models trained solely on the English data can attain competitive performance in the task of distinguishing different meanings of a word, even for distant languages. XL-WiC is available at https://pilehvar.github.io/xlwic/."

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

url_pdf: https://aclanthology.org/2020.emnlp-main.584.pdf
url_code: https://pilehvar.github.io/xlwic/
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
