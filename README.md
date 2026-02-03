![Logo of the project](https://cienciadedatosysalud.github.io/cdmb-web/logo_builder.png)


# Common Data Model Builder (cdmb)

## 🇺🇸 English Version

### Web
https://cienciadedatosysalud.github.io/cdmb-web/?lng=en

### Project Description
The **Common Data Model Builder (cdmb)** is a web application that facilitates building data models for projects with a defined structure. The application offers two ways to generate data models: using code or using a graphical interface.

The `cdmb` facilitates completing the project's metadata, including the cohort's definition, the entities, and the validation rules of the data model. It assists the user in systematically generating a reproducible folder structure for the research project, which can be easily implemented as part of a deployable workflow.

### Outputs & Project Structure
The structure and content of the outputs are described below, detailing the files and folders generated when creating a research project with `cdmb`.

There are four main folders:

- **docs/CDM/**
  - `cdmb_config.json`: Configuration file.
  - `cohort_definition_inclusion.csv`: CSV file that defines the criteria (i.e., codes) for inclusion in a cohort.
  - `cohort_definition_exclusion.csv`: CSV file that defines the criteria (i.e., codes) for exclusion in a cohort.
  - `common_datamodel.xlsx`: The definition of the common data model in Excel format.
  - `entities/`: Folder structure where catalogs and validation rules are stored for each defined entity.
  - `ER.mmd`: An Entity-Relationship Diagram of the entities included in the CDM in **Mermaid** format.
  - `synthetic-data/`: Folder structure containing an automatically generated set of 1000 synthetic records per entity included in the CDM.
  - `hashed_files_list.json`: List of the files generated or used after generating the project with their **SHA256 hash**. This file must be kept hidden and should be used to cross-check results against the original input files.

- **inputs/**
  - Default directory designed to house the project's input data. It contains the DuckDB database that is created to store the data introduced by the user during their interaction with the project's scripts.

- **outputs/**
  - Default directory for all outputs produced during project execution.

- **src/**
  - **analysis-scripts/**
    - *(Directory where analysis scripts developed by the user are stored)*
    - `r_report_template.qmd`: Quarto document with an example analysis, showing the interaction with the folder structure and files generated in the project.
    - `_quarto.yml`: File containing the metadata to execute Quarto documents.
  - **check_load-scripts/**
    - `check_load.py`: Script in charge of mapping the files introduced by the user (`./inputs`) to the defined entities (`inputs/data.duckdb`). During the loading process, checks are performed to ensure variable names and formats/types match the configuration.
    - `inputs/`: Auxiliary folder for the `check_load.py` script.
  - **dqa-scripts/**
    - `dqa.py`: Default Data Quality Assessment script.
  - **validation-scripts/**
    - `validator.py`: Script in charge of applying the validation rules to the data.
    - `validator_report.qmd`: Quarto document that generates an HTML report from the results obtained from `validator.py`.
    - `_quarto.yml`: File containing metadata to execute Quarto documents.

- **man_container_deployment.md**: The *Data Science for Health Services and Policy Research* group provides a solution for the deployment of the generated project in the linked GitHub repository. This step is optional.
- **LICENSE.md**: Project license (CC BY 4.0 by default).

---

## 🇪🇸 Versión en Español

### Web
https://cienciadedatosysalud.github.io/cdmb-web/

### Descripción del Proyecto
**Common Data Model Builder (cdmb)** es una aplicación web que facilita la construcción de modelos de datos para proyectos con una estructura definida. La aplicación ofrece dos formas de generar modelos de datos: mediante código o utilizando una interfaz gráfica.

`cdmb` facilita la cumplimentación de los metadatos del proyecto, incluyendo la definición de la cohorte, las entidades y las reglas de validación del modelo de datos. Ayuda al usuario a generar sistemáticamente una estructura de carpetas reproducible para el proyecto de investigación, fácilmente implementable como parte de un flujo de trabajo desplegable.

### Salidas y Estructura del Proyecto (Outputs)
A continuación se describen la estructura y el contenido de las salidas, incluyendo los archivos y carpetas que se generan al crear un proyecto de investigación con `cdmb`.

Existen cuatro carpetas principales:

- **docs/CDM/**
  - `cdmb_config.json`: Archivo de configuración.
  - `cohort_definition_inclusion.csv`: Archivo CSV que define los criterios (ej. códigos) de inclusión en una cohorte.
  - `cohort_definition_exclusion.csv`: Archivo CSV que define los criterios (ej. códigos) de exclusión en una cohorte.
  - `common_datamodel.xlsx`: La definición del modelo de datos común en formato Excel.
  - `entities/`: Estructura de carpetas donde se almacenan los catálogos y las reglas de validación para cada entidad definida.
  - `ER.mmd`: Diagrama Entidad-Relación de las entidades incluidas en el CDM en formato **Mermaid**.
  - `synthetic-data/`: Estructura de carpetas que contiene un conjunto generado automáticamente de 1000 registros sintéticos por entidad incluida en el CDM.
  - `hashed_files_list.json`: Lista de los archivos generados o utilizados tras generar el proyecto con su hash **SHA256**. Este archivo debe mantenerse oculto y utilizarse para cotejar los resultados del análisis con los archivos de entrada originales.

- **inputs/**
  - Directorio por defecto diseñado para alojar los datos de entrada del proyecto. Contiene la base de datos DuckDB, creada para almacenar los datos introducidos por el usuario durante su interacción con los scripts del proyecto.

- **outputs/**
  - Directorio por defecto para todas las salidas producidas en la ejecución del proyecto.

- **src/**
  - **analysis-scripts/**
    - *(Directorio donde se almacenan los scripts de análisis desarrollados por el usuario)*
    - `r_report_template.qmd`: Documento Quarto con un análisis de ejemplo, mostrando la interacción con la estructura de carpetas y archivos generados en el proyecto.
    - `_quarto.yml`: Archivo que contiene los metadatos para ejecutar documentos Quarto.
  - **check_load-scripts/**
    - `check_load.py`: Script encargado del mapeo entre los archivos introducidos por el usuario (`./inputs`) y las entidades definidas (`inputs/data.duckdb`). En el proceso de carga, se comprueba que los nombres y formatos/tipos de las variables coincidan con la configuración.
    - `inputs/`: Carpeta auxiliar para el script `check_load.py`.
  - **dqa-scripts/**
    - `dqa.py`: Script de Evaluación de Calidad de Datos (Data Quality Assessment) por defecto.
  - **validation-scripts/**
    - `validator.py`: Script encargado de aplicar las reglas de validación a los datos.
    - `validator_report.qmd`: Documento Quarto que genera un informe en HTML a partir de los resultados obtenidos de `validator.py`.
    - `_quarto.yml`: Archivo que contiene metadatos para ejecutar documentos Quarto.

- **man_container_deployment.md**: Desde el grupo *Data Science for Health Services and Policy Research* proporcionamos una solución para el despliegue del proyecto generado en el repositorio de GitHub vinculado. Este paso es opcional.
- **LICENSE.md**: Licencia del proyecto (CC BY 4.0 por defecto).



English version
---

