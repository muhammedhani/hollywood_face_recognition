# Hollywood Face Recognition!
A machine learning project to classify actors' or actresses' faces from images. You give the model an image and it outputs the name of the class as shown in the image below:
![1](https://user-images.githubusercontent.com/48108210/147878326-7b6aafa1-4315-4f56-8582-df21365e6f53.png)
For this project, we need a dataset of images of our 10 classes (actors or actresses).
We are implementing our model in <strong>python</strong>, and linked it to a web application (as UI).
***

## How to use:
* First, clone the repository to your device.
* Download the dataset from this link: [Dataset](https://drive.google.com/drive/folders/11TgG_m0Z5fMCt6goEMYqB0BsmULx3v1U?usp=sharing)
* Install python **3.7.9**
* Install the required python modules in requirements.txt: <br>
  Right click while holding shift in the current project folder and select "Open PowerShell window here" and then type this command
	> **pip install -r requirements.txt** <br>
* You can train the model again by running "hollywood_face_recognition.ipynb" cells 1 by 1. However, it's already trained and you can try it directly using the web server.
* Open the "server" folder as a project in any python IDE and run "server.py" to create the flask server.
* Go to "UI" folder and open "app.html".
* Now, you can try the model by uploading an image and pressing "Classify" button.
***

## About the dataset:
* We've collected about **1700** images.
* There are **10** classes (actors and actresses), each has **150-200** images.
* Our 10 classes:
	* Al Pacino
	* Benedict Cumberbatch
	* Emma Stone
	* Keanu Reeves
	* Michelle Williams
	* Morgan Freeman
	* Robert Downey Jr.
	* Tom Hardy
	* Viola Davis
	* Will Smith
***

## Steps to build the model:
* Data Collection.
* Data Cleaning.
* Feature Engineering (Feature Extraction).
* Split the dataset. (We used 80:20 split)
* Train the model (includes hyper tuning).
* Test and Evaluate the model.
* Deploy the model (the web application phase).
***

## Classification Approach:
* There are various methods to perform classification on this dataset. Some of them are:
	* **Multiclass Support Vector Machines (SVM)**
	* **Random Forest Classification**
	* **Logistic Regression**
* We'll try each of them and pick the one with the best **accuracy**.

### Support Vector Machines (SVM):
**Support Vector Machines** is a **supervised** machine learning algorithm that helps in **classification** or **regression** problems. It aims to find an optimal boundary between possible outputs.
Simply, SVM does complex data **transformations** depending on the selected **kernel function** and based on that transformations. It tries to maximize the separation boundaries between data points depending on the labels or classes defined.
### Random Forest Classifier:
**Random Forest Classifier** helps so well in classification problems. **Random Forest**, like its name implies, consists of a large number of individual **decision trees** that operate as an ensemble. Each individual tree in the random forest splits out a class prediction and the class with the **most votes** becomes our model's prediction. The fundamental concept behind random forest is a simple but powerful one.
### Logistic Regression:
**Logistic Regression** is basically a **supervised** machine learning algorithm that works so well in **prediction** problems. **Logistic Regression can become a classification technique when a decision threshold is brought out into the picture**. The setting of the threshold value is very important aspect of logistic regression and is dependent on the classification problem.
***

## Results:
* **Accuracy of SVM with RBF kernel function: 73.47%**
* **Accuracy of Random Forest Classifier: 46.26%**
* **Accuracy of Logistic Regression: 76.87%**

### We tried to hyper tune the SVM model:
**C values: 0.01, 0.1, 1, 10, 100, 1000, 10000, 100000**
![image](https://user-images.githubusercontent.com/48108210/147878627-1d40a6f3-4acc-4cb0-aacd-8b3f729bc342.png)
### We also hyper tuned the Logistic Regression:
**We used the same C values**
![image](https://user-images.githubusercontent.com/48108210/147878660-5280b6cc-73a5-4499-8ae9-521596a85d45.png)
## SVM Heat Map:
![image](https://user-images.githubusercontent.com/48108210/147878670-fc429606-34be-48e3-92bd-2d7688385423.png)
## Logistic Regression Heat Map:
![image](https://user-images.githubusercontent.com/48108210/147878678-1432de47-1664-463a-8520-356361968e39.png)
# UI:
![image](https://user-images.githubusercontent.com/48108210/147878682-7a839196-ec45-4f99-91a2-ab8ac1e4aec6.png)
***

# References:
* <a href = "https://towardsdatascience.com/face-detection-with-haar-cascade-727f68dafd08" target = "_blank">Face Detection with Haar Cascade</a>
* <a href = "https://towardsdatascience.com/face-detection-in-2-minutes-using-opencv-python-90f89d7c0f81" target = "_blank">Face Detection using opencv and python</a>
* <a href = "https://www.youtube.com/channel/UCh9nVJoWXmFb7sLApWGcLPQ" target = "_blank">Data Science Teaching Tutorials</a>
* <a href = "https://www.youtube.com/channel/UCVkatNMgkEdpWLhH0kBqqLw" target = "_blank">Signal Processing Tutorials</a>
* <a href = "https://www.youtube.com/watch?v=xrTor1uw5iI&ab_channel=Iman" target = "_blank">Images represented in frequency domain</a>
* <a href = "https://www.youtube.com/watch?v=spUNpyF58BY&ab_channel=3Blue1Brown" target = "_blank">Fourier Transform</a>
* <a href = "https://scikit-learn.org/stable/tutorial/index.html" target = "_blank">Scikit-learn Python Module</a>
* <a href = "https://matplotlib.org/stable/tutorials/index" target = "_blank">Matplotlib Python Module</a>
* <a href = "https://seaborn.pydata.org/tutorial.html" target = "_blank">Seaborn Python Module</a>
* <a href = "https://docs.python.org/3/library/pickle.html#module-pickle" target = "_blank">Picke Python Module</a>
* <a href = "https://stackoverflow.com/questions/33754935/read-a-base-64-encoded-image-from-memory-using-opencv-python-library" target = "_blank">get_cv2_image_from_base64_string(b64str) function (for backend)</a>
***

# All Credits goes to this pretty data-science youtube channel: <br>
<a href = "https://www.youtube.com/channel/UCh9nVJoWXmFb7sLApWGcLPQ" target = "_blank">codebasics</a>
