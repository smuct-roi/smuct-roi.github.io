---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Evaluating Language Models for the Retrieval and Categorization of Lexical Collocations"
authors:
- espinosaankel
- Joan Codina-Filba
- Leo Wanner
date: 2021-04-01
doi: "10.18653/v1/2021.eacl-main.120"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-02-19T23:12:41Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Proceedings of the 16th Conference of the European Chapter of the Association for Computational Linguistics: Main Volume"
publication_short: "*EACL 2021*"

abstract: "Lexical collocations are idiosyncratic combinations of two syntactically bound lexical items (e.g., ''heavy rain'' or ''take a step''). Understanding their degree of compositionality and idiosyncrasy, as well their underlying semantics, is crucial for language learners, lexicographers and downstream NLP applications. In this paper, we perform an exhaustive analysis of current language models for collocation understanding. We first construct a dataset of apparitions of lexical collocations in context, categorized into 17 representative semantic categories. Then, we perform two experiments: (1) unsupervised collocate retrieval using BERT, and (2) supervised collocation classification in context. We find that most models perform well in distinguishing light verb constructions, especially if the collocation's first argument acts as subject, but often fail to distinguish, first, different syntactic structures within the same semantic category, and second, fine-grained semantic categories which restrict the use of small sets of valid collocates for a given base."

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

url_pdf: https://aclanthology.org/2021.eacl-main.120.pdf
url_code:
url_dataset: https://github.com/luisespinosaanke/lexicalcollocations
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
