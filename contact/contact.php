<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Check if any field is empty
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "error: All fields are required.";
        exit;
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "error: Invalid email format.";
        exit;
    }

    // Set the recipient email address
    $to = "your-email@example.com"; // Replace with your email address

    // Email subject and message
    $email_subject = "Contact Form: $subject";
    $email_body = "You have received a new message from the contact form.\n\n".
                  "Name: $name\n".
                  "Email: $email\n\n".
                  "Message:\n$message\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "success: Your message has been sent successfully!";
    } else {
        echo "error: There was an issue sending your message. Please try again.";
    }
} else {
    echo "error: Invalid request.";
}
?>
