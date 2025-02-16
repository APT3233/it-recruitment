INSERT INTO `company` (username, password, role) VALUES
('c1', '0', 'company'),
('c2', '0', 'company'),
('c3', '0', 'company'),
('c4', '0', 'company'),
('c5', '0', 'company'),
('c6', '0', 'company'),
('c7', '0', 'company'),
('c8', '0', 'company');

INSERT INTO `company_profile` (company_id, name, phone, email,quanity_staff, quanity_job, quanity_cv) VALUES
(1, 'FPT Software', '19005229', 'hr@fpt.com.vn', 10, 2, 0),
(2, 'Viettel', '18001911', 'tuyendungit-02@viettel.com', 7, 2, 0),
(3, 'Tencent', '18008776', 'it-recruitment33@tencent.com.cn', 15, 1, 0),
(4, 'Microsoft', '12345678', 'hr@microsoft.com', 20, 3, 0),
(5, 'Google', '87654321', 'jobs@google.com', 25, 4, 0),
(6, 'Apple', '11223344', 'careers@apple.com', 18, 2, 0),
(7, 'Amazon', '44332211', 'hr@amazon.com', 30, 5, 0),
(8, 'IBM', '55667788', 'jobs@ibm.com', 12, 1, 0);

INSERT INTO `job` (company_id, name, city, salary, status, language) VALUES
(1, 'Software Engineer', 'Ha Noi', 80000, 'Active', '["Java", "Python", "C/C++"]'),
(1, 'Web Developer', 'Ho Chi Minh', 70000, 'Inactive', '["HTML", "CSS", "JavaScript"]'),
(2, 'Data Analyst', 'San Francisco', 75000, 'Active', '["SQL", "Python"]'),
(3, 'Project Manager', 'Seoul', 90000, 'Active', '["Agile", "Scrum"]'),
(3, 'UX Designer', 'Bắc Kinh', 65000, 'Inactive', '["Figma", "Sketch"]');
(4, 'Cloud Engineer', 'Redmond', 90000, 'Active', '["Azure", "AWS", "Docker"]'),
(4, 'Data Scientist', 'Seattle', 85000, 'Active', '["Python", "Machine Learning", "R"]'),
(4, 'DevOps Engineer', 'Austin', 80000, 'Inactive', '["CI/CD", "Kubernetes"]'),
(5, 'Software Engineer', 'Mountain View', 95000, 'Active', '["C++", "Java", "Go"]'),
(5, 'Product Manager', 'New York', 100000, 'Active', '["Agile", "Scrum"]'),
(5, 'UX Designer', 'San Francisco', 70000, 'Inactive', '["Figma", "Sketch"]'),
(5, 'Site Reliability Engineer', 'Chicago', 90000, 'Active', '["Python", "Linux"]'),
(6, 'iOS Developer', 'Cupertino', 85000, 'Active', '["Swift", "Objective-C"]'),
(6, 'Hardware Engineer', 'Austin', 90000, 'Active', '["C++", "Embedded Systems"]'),
(7, 'Logistics Manager', 'Seattle', 80000, 'Active', '["Supply Chain", "Management"]'),
(7, 'Cloud Architect', 'New York', 95000, 'Active', '["AWS", "Cloud Architecture"]'),
(7, 'Marketing Specialist', 'Los Angeles', 70000, 'Inactive', '["SEO", "Content Marketing"]'),
(7, 'Data Engineer', 'Chicago', 85000, 'Active', '["SQL", "Python", "Big Data"]'),
(7, 'Customer Service Manager', 'Dallas', 75000, 'Active', '["Customer Relations"]'),
(8, 'AI Researcher', 'Armonk', 95000, 'Active', '["Python", "TensorFlow", "Machine Learning"]');