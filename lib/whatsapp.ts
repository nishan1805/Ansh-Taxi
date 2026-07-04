import { VEHICLES } from '@/data/fleet';
import { BookingFormData } from '@/types';

export const formatReadableDate = (dateStr: string): string => {
  if (!dateStr) return '';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      if (!isNaN(date.getTime())) {
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
      }
    }
    return dateStr;
  } catch (err) {
    return dateStr;
  }
};

export const formatReadableTime = (timeStr: string): string => {
  if (!timeStr) return '';
  try {
    const [hours, minutes] = timeStr.split(':');
    const h = parseInt(hours, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayHours = h % 12 || 12;
    return `${displayHours}:${minutes} ${ampm}`;
  } catch (err) {
    return timeStr;
  }
};

export const generateBookingMessage = (formData: BookingFormData): string => {
  const {
    activeTab,
    pickupLocation,
    packageName,
    date,
    time,
    vehicle,
    mobile,
    airportPickupType,
    pickupCity,
    destinationCity,
    returnDate,
    passengers,
    companyName,
  } = formData;

  const vehicleObj = VEHICLES.find(v => v.id === vehicle) || VEHICLES[1];
  const vehicleName = vehicleObj.name;

  let serviceText = '';
  let detailsText = '';

  if (activeTab === 'local') {
    serviceText = 'Local Taxi';
    detailsText = `Pickup Location:
${pickupLocation || 'Raipur'}

Package:
${packageName}

Date:
${formatReadableDate(date)}

Time:
${formatReadableTime(time)}`;
  } else if (activeTab === 'airport') {
    serviceText = `Airport Transfer - ${airportPickupType}`;
    detailsText = `Pickup Location:
${pickupLocation || 'Raipur'}

Date:
${formatReadableDate(date)}

Time:
${formatReadableTime(time)}`;
  } else if (activeTab === 'oneway') {
    serviceText = 'One Way';
    detailsText = `Pickup:
${pickupCity}

Destination:
${destinationCity}

Date:
${formatReadableDate(date)}

Time:
${formatReadableTime(time)}`;
  } else if (activeTab === 'roundtrip') {
    serviceText = 'Round Trip';
    detailsText = `Pickup:
${pickupCity}

Destination:
${destinationCity}

Departure Date:
${formatReadableDate(date)}

Return Date:
${formatReadableDate(returnDate)}`;
  } else if (activeTab === 'outstation') {
    serviceText = 'Outstation';
    detailsText = `Pickup:
${pickupCity}

Destination:
${destinationCity}

Date:
${formatReadableDate(date)}

Time:
${formatReadableTime(time)}

Passengers:
${passengers}`;
  } else if (activeTab === 'corporate') {
    serviceText = 'Corporate';
    detailsText = `Company:
${companyName}

Pickup:
${pickupCity}

Destination:
${destinationCity}

Date:
${formatReadableDate(date)}

Time:
${formatReadableTime(time)}`;
  }

  return `Hello ANSH TAXI,

I would like to book a taxi.

Service:
${serviceText}

${detailsText}

Vehicle:
${vehicleName}

Mobile:
${mobile || '9644482331'}

Please contact me regarding the booking.`;
};

export const generateWhatsAppURL = (message: string, phoneNumber: string = '919644482331'): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
