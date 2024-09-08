<?php
// Display errors for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form inputs
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($subject) && !empty($message) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "owneremail@example.com"; // Replace with your email address
        $email_subject = "New message from: $name - $subject";
        $email_body = "Name: $name\n";
        $email_body .= "Email: $email\n";
        $email_body .= "Subject: $subject\n";
        $email_body .= "Message:\n$message\n";

        $headers = "From: $email\n";
        $headers .= "Reply-To: $email";

        if (mail($to, $email_subject, $email_body, $headers)) {
            echo "success";
        } else {
            echo "error: Unable to send email.";
        }
    } else {
        echo "error: Invalid input.";
    }
} else {
    echo "error: Invalid request method.";
}
?>
