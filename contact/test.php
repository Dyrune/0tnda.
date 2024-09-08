<?php
$to = "akindior@gmail.com"; // Replace with your email
$subject = "Test Email";
$message = "This is a test email.";
$headers = "From: dyrunee@gmail.com"; // Replace with a valid sender email

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully.";
} else {
    echo "Mail failed to send.";
}
?>
