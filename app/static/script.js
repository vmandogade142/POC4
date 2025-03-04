document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('login-section');
    const appSection = document.getElementById('app-section');
    const adminSection = document.getElementById('admin-section');
    const loginBtn = document.getElementById('login-btn');
    const questionInput = document.getElementById('question-input');
    const submitQuestionBtn = document.getElementById('submit-question');
    const responseContent = document.getElementById('response-content');

    loginBtn.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                loginSection.classList.add('hidden');
                appSection.classList.remove('hidden');
                if (data.role === 'admin') {
                    adminSection.classList.remove('hidden');
                    const uploadForm = document.getElementById('upload-form');
                    if (uploadForm) {
                        uploadForm.addEventListener('submit', function(event) {
                            event.preventDefault();
                            const formData = new FormData();
                            const fileInput = document.getElementById('file-input');
                            const files = fileInput.files;

                            if (files.length === 0) {
                                alert("Please select a file.");
                                return;
                            }

                            for (let i = 0; i < files.length; i++) {
                                formData.append('file', files[i]);
                            }

                            fetch('/upload', {
                                method: 'POST',
                                body: formData
                            })
                            .then(response => response.json())
                            .then(data => {
                                if (data.message) {
                                    alert('Upload successful: ' + data.message);
                                } else {
                                    alert('Upload failed: ' + data.error);
                                }
                            });
                        });
                    }
                    const deleteBtn = document.getElementById('delete-btn');
                    if(deleteBtn){
                        deleteBtn.addEventListener('click', function() {
                            const filename = document.getElementById('delete-filename').value;
                            if(filename){
                                fetch('/delete', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({ filename: filename })
                                })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.message) {
                                        alert('Delete successful: ' + data.message);
                                    } else {
                                        alert('Delete failed: ' + data.error);
                                    }
                                });
                            } else {
                                alert("Please enter the filename to delete.");
                            }
                        });
                    }
                }
            } else {
                alert('Login failed: ' + data.error);
            }
        });
    });

    submitQuestionBtn.addEventListener('click', function() {
        const question = questionInput.value;
        fetch('/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: question })
        })
        .then(response => response.json())
        .then(data => {
            if (data.response) {
                responseContent.textContent = data.response;
            } else {
                responseContent.textContent = 'Error: ' + data.error;
            }
        });
    });
});