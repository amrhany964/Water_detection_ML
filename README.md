# 💧 Water Potability Prediction using Machine Learning  

## 📌 Project Overview  
This project predicts whether a given water sample is **potable (safe to drink)** or not.  
It leverages multiple **machine learning algorithms** and a **complete preprocessing pipeline**, with a **Streamlit GUI** for real-time predictions.  

---

## 📊 Dataset  
The dataset contains physicochemical features of water samples, including:  
- pH  
- Hardness  
- Solids  
- Chloramines  
- Sulfate  
- Conductivity  
- Organic Carbon  
- Trihalomethanes  
- Turbidity  
- **Potability** (1 = potable, 0 = not potable)  

---

## 🔧 Preprocessing Steps  
- **Null Handling** → filled or dropped missing values  
- **Outlier Detection & Removal** → treated extreme values  
- **Feature Scaling** → standardized numerical features  
- **Data Balancing** → applied **SMOTE** to fix imbalance  
- **Automation Script** → reusable script for preprocessing new datasets  

---

## 🤖 Modeling  
Trained & evaluated multiple ML models:  
- Support Vector Machine (SVM)  
- K-Nearest Neighbors (KNN)  
- Logistic Regression  
- Decision Tree  
- Random Forest  

✅ Compared models on **Accuracy, Precision, Recall, and F1-score**  
✅ Selected the best-performing model for deployment  

---

## 🖥️ Deployment  
- Built a **Streamlit GUI** for easy interaction  
- Users can input new water sample data → get instant potability predictions  

---

## 🛠️ Tech Stack  
**Languages & Libraries**:  
- Python, Pandas, NumPy, Scikit-learn, imbalanced-learn (SMOTE), Streamlit  

**Tools**:  
- Jupyter Notebook  
- Streamlit  

---

##  Demo  

- 🎥 Demo Video: [here](https://drive.google.com/file/d/1tyD6aRXqnL1tB_9JA1Atzz4vEielWkQ6/view?usp=sharing)  

---

## 🚀 Skills Gained  
- Data Preprocessing  
- Feature Engineering  
- Data Balancing (SMOTE)  
- Machine Learning (classification)  
- GUI Development with Streamlit  
