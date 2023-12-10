<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Create email content
    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Subject: $subject\n\n";
    $emailContent .= "Message:\n$message";

    // Set up email headers
    $headers = "From: $email";

    // Set up recipient email (replace with your email)
    $to = "micah@micahnettey.com";

    // Send the email
    $success = mail($to, $subject, $emailContent, $headers);

    // Check if the email was sent successfully
    if ($success) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
