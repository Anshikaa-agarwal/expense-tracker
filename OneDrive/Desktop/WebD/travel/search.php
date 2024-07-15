<?php
$conn = mysqli_connect("localhost", "root", "", "dbwproj");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Loop through each hid (hotel ID)
for ($hid = 1; $hid <= 30; $hid++) {
    // Insert two rows for each hotel room type
    for ($i = 1; $i <= 2; $i++) {
        $typeName = "Room Type " . $i;  // Customize the room type name as needed
        $cost = rand(50, 200);  // Random cost for demonstration purposes

        // SQL query to insert into hotel_room table
        $sqlInsertRoom = "INSERT INTO hotel_room (hid, typeName, cost) VALUES ($hid, '$typeName', $cost)";

        if (mysqli_query($conn, $sqlInsertRoom)) {
            echo "Inserted into hotel_room for hid=$hid, typeName=$typeName<br>";
        } else {
            echo "Error inserting into hotel_room: " . mysqli_error($conn) . "<br>";
        }
    }
}

mysqli_close($conn);
?>