# 🦠 Belly Button Biodiversity Dashboard  

### **Overview**  
This project is an interactive dashboard that visualizes the **Belly Button Biodiversity** dataset, which catalogs microbial species found in human navels. The dashboard allows users to explore the dataset dynamically using visualizations such as **bar charts**, **bubble charts**, and **demographic information**.

The dashboard is built using **JavaScript, D3.js, and Plotly.js** and deployed as a **static website** on **GitHub Pages**.

---

## **Table of Contents**
- [Features](#features)
- [Dataset](#dataset)
- [Installation & Setup](#installation--setup)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [License](#license)

---

## **Features**  

✅ **Dropdown Selection:** Users can select a sample ID to explore individual microbial data.  
✅ **Horizontal Bar Chart:** Displays the top 10 bacteria found in the selected sample.  
✅ **Bubble Chart:** Shows the bacteria per sample with relative abundance.  
✅ **Demographic Panel:** Displays key metadata like age, location, and frequency of washing.  
✅ **Live Deployment:** Hosted on GitHub Pages for public access.  

---

## **Dataset**  
The dataset used for this project comes from the [Belly Button Biodiversity](https://robdunnlab.com/projects/belly-button-biodiversity/) study.  
- The `samples.json` file contains:
  - `names`: List of sample IDs
  - `metadata`: Demographic info for each sample
  - `samples`: Bacteria data, including `otu_ids`, `otu_labels`, and `sample_values`

---

## **Installation & Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/jeff-gary/Belly-Button-Challenge.git
cd Belly-Button-Challenge
```

### **2️⃣ Open in a Local Browser**  
Simply open `index.html` in your browser.

### **3️⃣ View the Live Deployment**  
Access the live site via **GitHub Pages** at:  
🔗 [jeff-gary.github.io/Belly-Button-Challenge](https://jeff-gary.github.io/Belly-Button-Challenge/)

---

## **Technologies Used**  
| Technology    | Purpose |
|--------------|---------|
| HTML / CSS   | Structure & Styling |
| JavaScript   | Interactive Logic |
| D3.js        | Data Loading & Manipulation |
| Plotly.js    | Data Visualization |
| GitHub Pages | Hosting the Project |

---

## **File Structure**
```
Belly-Button-Challenge/
│── index.html             # Main HTML file for the dashboard
│── samples.json           # Dataset file
│── README.md              # Documentation
│── static/
│   ├── js/
│   │   ├── app.js         # JavaScript logic for charts & interactivity
```

---

## **Usage**  
1️⃣ Open the dashboard in a browser.  
2️⃣ Use the dropdown to select a test subject ID.  
3️⃣ View the **bar chart, bubble chart, and demographic info** updating dynamically.  

---

## **Deployment**  
This project is hosted using **GitHub Pages**. The deployment steps include:  
- **Commit changes** to GitHub  
- **Enable GitHub Pages** in repository settings  
- **Access the deployed site** via the provided GitHub Pages URL  

---

## **Contributors**  
- **Jeffrey Gary** ([@Jeff-Gary](https://github.com/jeff-gary))    
- **Open Source Community (for D3.js & Plotly.js libraries)**  

---

## **License**  
This project is open-source and licensed under the **MIT License**.  

---

 **Enjoy exploring microbial life with this interactive dashboard!**   

---
