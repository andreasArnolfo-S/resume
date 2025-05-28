
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
    <style>
        body { margin: 0; font-family: Arial, sans-serif; }
        .navbar {
            display: flex;
            background-color: #333;
            padding: 1rem;
            justify-content: space-between;
            align-items: center;
        }
        .navbar a {
            color: white;
            text-decoration: none;
            margin-left: 1.5rem;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">MyLogo</div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</body>
</html>
