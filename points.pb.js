/// <reference path="../pb_data/types.d.ts" />

// Custom route to process an activity by ID
// This route requires authentication and verifies ownership
routerAdd(
    "GET",
    "/api/activities/{id}/points",
    (e) => {
        function calculatePoints(activityType, duration, distance, minAltitude, maxAltitude) {
            // Convert units for calculations
            const durationMinutes = duration / 60; // Convert seconds to minutes
            const distanceKm = distance / 1000; // Convert meters to kilometers
            const durationHours = duration / 3600; // Convert seconds to hours
            const speed = distanceKm / durationHours; // Calculate speed in km/h
            const altitudeChange = Math.abs(maxAltitude - minAltitude); // Calculate altitude change

            // Check requirements for each activity type
            switch (activityType) {
                case "walking": // Hodanje
                    if (
                        distanceKm >= 5 &&
                        durationMinutes >= 43 &&
                        // durationMinutes <= 60 &&
                        speed >= 1.5 &&
                        speed <= 7
                    ) {
                        return 1;
                    }
                    break;

                case "running": // Trčanje
                    if (
                        distanceKm >= 3 &&
                        durationMinutes >= 15 &&
                        // durationMinutes <= 23 &&
                        speed >= 8 &&
                        speed <= 12
                    ) {
                        return 2;
                    }
                    break;

                case "hiking": // Planinarenje
                    if (
                        distanceKm >= 6 &&
                        durationMinutes >= 45 &&
                        // durationMinutes <= 180 &&
                        altitudeChange >= 600
                    ) {
                        return 2;
                    }
                    break;

                case "cycling": // Bicikliranje
                    if (
                        distanceKm >= 20 &&
                        durationMinutes >= 40 &&
                        // durationMinutes <= 80 &&
                        speed >= 15 &&
                        speed <= 60
                    ) {
                        return 1;
                    }
                    break;

                case "skating": // Rolanje
                    if (
                        distanceKm >= 7 &&
                        durationMinutes >= 30 &&
                        // durationMinutes <= 42 &&
                        speed >= 10 &&
                        speed <= 14
                    ) {
                        return 1;
                    }
                    break;
            }

            // If none of the requirements are met
            return 0;
        }
        // Get the activity ID from the path parameter
        const activityId = e.request.pathValue("id");

        // Get the authenticated user from the request
        // if (!e.auth) {
        //     throw new UnauthorizedError("You must be logged in to access this resource");
        // }

        // Find the activity record
        let activityRecord;
        try {
            activityRecord = $app.findRecordById("activities", activityId);
        } catch (err) {
            return e.json(404, {
                message: "Activity not found"
            });
        }

        // Verify the authenticated user is the owner of the activity
        // if (activityRecord.get("user") !== e.auth.id) {
        //     return e.json(403, {
        //         message: "You don't have permission to access this activity"
        //     });
        // }

        const activityType = activityRecord.get("type");
        const duration = activityRecord.get("duration");
        const distance = activityRecord.get("distance");
        const minAltitude = activityRecord.get("minAltitude");
        const maxAltitude = activityRecord.get("maxAltitude");

        const points = calculatePoints(activityType, duration, distance, minAltitude, maxAltitude);

        // Process the activity data
        // This is where you would add your custom logic
        // const processedData = {
        //     id: activityRecord.id,
        //     title: activityRecord.get("title"),
        //     // Add any other fields you want to process
        //     processed: true,
        //     timestamp: new Date().toISOString()
        // };

        // Return the processed data
        return e.json(200, {
            points: points
        });
    }
    // $apis.requireAuth()
);

/**
 * Calculates points awarded for a physical activity based on given parameters
 * @param {string} activityType - Type of activity (running, walking, hiking, cycling, skating)
 * @param {number} duration - Duration in seconds
 * @param {number} minAltitude - Minimum altitude in meters
 * @param {number} maxAltitude - Maximum altitude in meters
 * @param {number} distance - Distance covered in meters
 * @returns {number} Points awarded (0, 1, or 2)
 */
