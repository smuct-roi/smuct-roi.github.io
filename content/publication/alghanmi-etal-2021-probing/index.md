---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Probing Pre-Trained Language Models for Disease Knowledge"
authors:
- Israa Alghanmi
- espinosaankel
- schockaerts
date: 2021-08-01
doi: "10.18653/v1/2021.findings-acl.266"

# Schedule page publish date (NOT publication's date).
publishDate: 2022-02-19T23:18:12Z

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "Findings of the Association for Computational Linguistics: ACL-IJCNLP 2021"
publication_short: "*Findings ACL-IJCNLP 2021*"

abstract: "Pre-trained language models such as ClinicalBERT have achieved impressive results on tasks such as medical Natural Language Inference. At first glance, this may suggest that these models are able to perform medical reasoning tasks, such as mapping symptoms to diseases. However, we find that standard benchmarks such as MedNLI contain relatively few examples that require such forms of reasoning. To better understand the medical reasoning capabilities of existing language models, in this paper we introduce DisKnE, a new benchmark for Disease Knowledge Evaluation. To construct this benchmark, we annotated each positive MedNLI example with the types of medical reasoning that are needed. We then created negative examples by corrupting these positive examples in an adversarial way. Furthermore, we define training-test splits per disease, ensuring that no knowledge about test diseases can be learned from the training data, and we canonicalize the formulation of the hypotheses to avoid the presence of artefacts. This leads to a number of binary classification problems, one for each type of reasoning and each disease. When analysing pre-trained models for the clinical/biomedical domain on the proposed benchmark, we find that their performance drops considerably"

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

url_pdf: https://aclanthology.org/2021.findings-acl.266.pdf
url_code: https://github.com/israa-alghanmi/DisKnE
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
