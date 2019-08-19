# Front End
This is the presentation layer. from here, SMEs will be able to interact with the system by uploading their data.
- Data Transformation
This module allows customers to Transform their uploaded data.
Data Preparation Consumes 90% of the time in Predictive analytics.
Data Preparation and data Transformation is out of Scope for this study. It is therefore expected that the Data preparation will be done outside this system.


- Upload
This module allows the SMES to Upload their Data to the platform ready for prediction.
#customer Journey
```
Customers will:-
- Select Their Industry
- Declare the Number of files they intend to Upload
- Upload the files for prediction
```
Note: The application will Accept .csv, .xls, .xlsx file formats to be uploaded.
The Upload will save the data in a temporaty_table that will be deleted imediately after prediction.

# Back End
#Services
/upload
This POST service will save data into the Temporary table ready for Predition.

/displayupload
This GET Service will return uploded data ready for prediction

/deleteupload
This Service deletes the datathat was uploaded for predition

/classificationmodel
This service will send the data into the classification model for prediction

/linerregressionmodel
This service will send the data into the linear regression model for prediction

/clusterringmodel
This service will send the data into the clustering model for prediction

/classification_results

/regression_results

/clustering_results