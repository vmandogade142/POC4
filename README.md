# GenAI RAG Document Search Bot
This project demonstrates a Proof of Concept (POC) for a Document Search Bot utilizing Retrieval Augmented Generation (RAG) with OpenAI. The bot allows users to query information from uploaded documents, providing relevant and accurate responses.

## Project Overview
**Use Case:**
This project addresses the need for an efficient document search solution using Generative AI. The bot allows users to upload various document types (Word, PDF, Excel, PPT) and query information contained within them.

**Key Features:**
* **Document Upload & Deletion (Admin):** Administrators can upload and delete documents to manage the knowledge base.
* **Query Answering (All Users):** Users can ask questions related to the uploaded documents and receive relevant answers.
* **Supported Document Types:** Word (.docx), PDF (.pdf), Excel (.xlsx), and PowerPoint (.pptx).
* **Document Size Limit:** 2MB per document.
* **Relevant and Accurate Responses:** The bot retrieves information directly from uploaded documents to provide precise answers.
* **User Interface:** A user-friendly UI developed using React or Angular.
* **User Roles:** Admin and Normal User with different privileges.
* **Test Cases and Validation:** Comprehensive test cases have been created to ensure the bot's reliability.

## Design & Approach
The project follows a RAG architecture, which involves:
1.  **Document Ingestion:** Documents are parsed and converted into text.
2.  **Text Chunking:** The text is divided into smaller chunks.
3.  **Embedding Generation:** Text chunks are converted into vector embeddings using OpenAI's embedding models.
4.  **Vector Store:** Embeddings are stored in a vector database for efficient similarity search.
5.  **Query Processing:** User queries are converted into embeddings.
6.  **Retrieval:** The vector store is queried to retrieve the most relevant document chunks.
7.  **Response Generation:** OpenAI's language models are used to generate a response based on the retrieved information and the user's query.

## User Roles
* **Admin:**
    * Upload documents.
    * Delete documents.
    * Ask queries.
* **Normal User:**
    * Ask queries.

## Project Structure

## How to Run
**Prerequisites:**
* Python 3.11
* Conda

**Steps:**
1.  **Create a Conda Environment:**
    ```bash
    conda create -n venv python=3.11 -y
    conda activate venv
    ```

2.  **Install Requirements:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Run the Application:**
    ```bash
    python app/main.py
    ```

4.  **Access the UI:**
    Open your web browser and navigate to the local host and port specified in the application's output.


## Additional Resources
* **Code Repository Branch:** \[Insert Branch Name Here]
* **Demo Recording:** \[Insert Link to Demo Recording Here]

## Test Cases
Test cases have been developed to validate the bot's functionality, including:

* Document upload and deletion.
* Query answering with various document types.
* Handling of document size limitations.
* Admin and normal user role validation.

## Future Enhancements
* Improve document parsing for better accuracy.
* Implement user authentication.
* Add support for more document types.
* Implement a more robust error handling system.
* Scale the application for more users.
* UI enhancement.
