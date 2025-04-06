export function calculatePoints(activityType: string, duration: number, distance: number, minAltitude: number, maxAltitude: number): number {
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