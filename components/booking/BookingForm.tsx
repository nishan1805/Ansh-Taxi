'use client';

import React from 'react';
import { useBooking } from '@/hooks/use-booking';
import { VEHICLES } from '@/data/fleet';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { DatePicker } from '@/components/ui/DatePicker';
import { 
  Calendar, 
  Clock3, 
  Phone, 
  Briefcase, 
  MapPin 
} from 'lucide-react';

const pickupOptions = [
  { value: 'Raipur', label: 'Raipur' },
  { value: 'Bilaspur', label: 'Bilaspur' },
  { value: 'Durg', label: 'Durg' },
  { value: 'Bhilai', label: 'Bhilai' },
  { value: 'Jagdalpur', label: 'Jagdalpur' },
];

const destinationOptions = [
  { value: 'Bilaspur', label: 'Bilaspur' },
  { value: 'Raipur', label: 'Raipur' },
  { value: 'Durg', label: 'Durg' },
  { value: 'Bhilai', label: 'Bhilai' },
  { value: 'Jagdalpur', label: 'Jagdalpur' },
  { value: 'Swami Vivekananda Airport', label: 'Swami Vivekananda Airport' },
];

export const BookingForm: React.FC = () => {
  const {
    heroActiveTab,
    heroDate,
    setHeroDate,
    heroTime,
    setHeroTime,
    heroReturnDate,
    setHeroReturnDate,
    heroVehicle,
    setHeroVehicle,
    heroMobile,
    setHeroMobile,
    heroAirportPickupType,
    setHeroAirportPickupType,
    heroPickupLocation,
    setHeroPickupLocation,
    heroPackage,
    setHeroPackage,
    heroPickupCity,
    setHeroPickupCity,
    heroDestinationCity,
    setHeroDestinationCity,
    heroCompanyName,
    setHeroCompanyName,
    handleHeroSubmit
  } = useBooking();

  const vehicleOptions = VEHICLES.map((v) => ({
    value: v.id,
    label: `${v.name} (₹${v.baseRatePerKm}/km)`
  }));

  const renderTabFields = () => {
    switch (heroActiveTab) {
      case 'local':
        return (
          <>
            {/* Row 1 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Pickup City</span>
              <Select
                icon={<MapPin className="w-5 h-5" />}
                value={heroPickupCity}
                onChange={(e) => setHeroPickupCity(e.target.value)}
                options={pickupOptions}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Local Package</span>
              <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 rounded-[16px] h-14 px-2 w-full">
                {['60 km / 6 Hours', '80 km / 8 Hours', '100 km / 10 Hours'].map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => setHeroPackage(pkg)}
                    className={`flex-1 h-10 text-[9px] md:text-[10px] font-extrabold rounded-[10px] transition-all cursor-pointer leading-tight ${
                      heroPackage === pkg 
                        ? 'bg-[#FFC107] text-black shadow-sm' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {pkg.split(' / ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Vehicle</span>
              <Select
                icon={<Briefcase className="w-5 h-5" />}
                value={heroVehicle}
                onChange={(e) => setHeroVehicle(e.target.value)}
                options={vehicleOptions}
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Date & Time</span>
              <div className="flex gap-3 w-full">
                <div className="flex-1 min-w-0">
                  <DatePicker
                    value={heroDate}
                    onChange={(e) => setHeroDate(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Input
                    icon={<Clock3 className="w-5 h-5" />}
                    type="time"
                    value={heroTime}
                    onChange={(e) => setHeroTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Mobile Number</span>
              <Input
                icon={<Phone className="w-5 h-5" />}
                type="tel"
                pattern="[0-9]{10}"
                value={heroMobile}
                onChange={(e) => setHeroMobile(e.target.value)}
                placeholder="9644482331"
                required
              />
            </div>

            <div className="hidden lg:block" />
          </>
        );

      case 'airport':
        return (
          <>
            {/* Row 1 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Airport Service</span>
              <div className="flex items-center gap-1.5 bg-black/40 border border-white/10 rounded-[16px] h-14 px-2 w-full">
                {['Airport Pickup', 'Airport Drop'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setHeroAirportPickupType(type as any)}
                    className={`flex-1 h-10 text-xs font-bold rounded-[10px] transition-all cursor-pointer ${
                      heroAirportPickupType === type 
                        ? 'bg-[#FFC107] text-black shadow-sm' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {type.split(' ')[1]}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Airport / Location</span>
              <Input
                icon={<MapPin className="w-5 h-5" />}
                type="text"
                value={heroPickupLocation}
                onChange={(e) => setHeroPickupLocation(e.target.value)}
                placeholder="Enter pickup/dropoff address"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Vehicle</span>
              <Select
                icon={<Briefcase className="w-5 h-5" />}
                value={heroVehicle}
                onChange={(e) => setHeroVehicle(e.target.value)}
                options={vehicleOptions}
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Date & Time</span>
              <div className="flex gap-3 w-full">
                <div className="flex-1 min-w-0">
                  <DatePicker
                    value={heroDate}
                    onChange={(e) => setHeroDate(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Input
                    icon={<Clock3 className="w-5 h-5" />}
                    type="time"
                    value={heroTime}
                    onChange={(e) => setHeroTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Mobile Number</span>
              <Input
                icon={<Phone className="w-5 h-5" />}
                type="tel"
                pattern="[0-9]{10}"
                value={heroMobile}
                onChange={(e) => setHeroMobile(e.target.value)}
                placeholder="9644482331"
                required
              />
            </div>

            <div className="hidden lg:block" />
          </>
        );

      case 'oneway':
        return (
          <>
            {/* Row 1 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Pickup City</span>
              <Select
                icon={<MapPin className="w-5 h-5" />}
                value={heroPickupCity}
                onChange={(e) => setHeroPickupCity(e.target.value)}
                options={pickupOptions}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Destination City</span>
              <Select
                icon={<MapPin className="w-5 h-5" />}
                value={heroDestinationCity}
                onChange={(e) => setHeroDestinationCity(e.target.value)}
                options={destinationOptions}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Vehicle</span>
              <Select
                icon={<Briefcase className="w-5 h-5" />}
                value={heroVehicle}
                onChange={(e) => setHeroVehicle(e.target.value)}
                options={vehicleOptions}
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Date & Time</span>
              <div className="flex gap-3 w-full">
                <div className="flex-1 min-w-0">
                  <DatePicker
                    value={heroDate}
                    onChange={(e) => setHeroDate(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Input
                    icon={<Clock3 className="w-5 h-5" />}
                    type="time"
                    value={heroTime}
                    onChange={(e) => setHeroTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Mobile Number</span>
              <Input
                icon={<Phone className="w-5 h-5" />}
                type="tel"
                pattern="[0-9]{10}"
                value={heroMobile}
                onChange={(e) => setHeroMobile(e.target.value)}
                placeholder="9644482331"
                required
              />
            </div>

            <div className="hidden lg:block" />
          </>
        );

      case 'roundtrip':
        return (
          <>
            {/* Row 1 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Pickup City</span>
              <Select
                icon={<MapPin className="w-5 h-5" />}
                value={heroPickupCity}
                onChange={(e) => setHeroPickupCity(e.target.value)}
                options={pickupOptions}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Destination City</span>
              <Select
                icon={<MapPin className="w-5 h-5" />}
                value={heroDestinationCity}
                onChange={(e) => setHeroDestinationCity(e.target.value)}
                options={destinationOptions}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Vehicle</span>
              <Select
                icon={<Briefcase className="w-5 h-5" />}
                value={heroVehicle}
                onChange={(e) => setHeroVehicle(e.target.value)}
                options={vehicleOptions}
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Departure Date</span>
              <DatePicker
                value={heroDate}
                onChange={(e) => setHeroDate(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Return Date</span>
              <DatePicker
                value={heroReturnDate}
                onChange={(e) => setHeroReturnDate(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Mobile Number</span>
              <Input
                icon={<Phone className="w-5 h-5" />}
                type="tel"
                pattern="[0-9]{10}"
                value={heroMobile}
                onChange={(e) => setHeroMobile(e.target.value)}
                placeholder="9644482331"
                required
              />
            </div>
          </>
        );

      case 'outstation':
        return (
          <>
            {/* Row 1 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Pickup City</span>
              <Select
                icon={<MapPin className="w-5 h-5" />}
                value={heroPickupCity}
                onChange={(e) => setHeroPickupCity(e.target.value)}
                options={pickupOptions}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Destination</span>
              <Input
                icon={<MapPin className="w-5 h-5" />}
                type="text"
                value={heroDestinationCity}
                onChange={(e) => setHeroDestinationCity(e.target.value)}
                placeholder="Enter destination address"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Vehicle</span>
              <Select
                icon={<Briefcase className="w-5 h-5" />}
                value={heroVehicle}
                onChange={(e) => setHeroVehicle(e.target.value)}
                options={vehicleOptions}
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Date & Time</span>
              <div className="flex gap-3 w-full">
                <div className="flex-1 min-w-0">
                  <DatePicker
                    value={heroDate}
                    onChange={(e) => setHeroDate(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Input
                    icon={<Clock3 className="w-5 h-5" />}
                    type="time"
                    value={heroTime}
                    onChange={(e) => setHeroTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Mobile Number</span>
              <Input
                icon={<Phone className="w-5 h-5" />}
                type="tel"
                pattern="[0-9]{10}"
                value={heroMobile}
                onChange={(e) => setHeroMobile(e.target.value)}
                placeholder="9644482331"
                required
              />
            </div>

            <div className="hidden lg:block" />
          </>
        );

      case 'corporate':
        return (
          <>
            {/* Row 1 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Company Name</span>
              <Input
                icon={<Briefcase className="w-5 h-5" />}
                type="text"
                value={heroCompanyName}
                onChange={(e) => setHeroCompanyName(e.target.value)}
                placeholder="Enter organization name"
                required
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Pickup City</span>
              <Select
                icon={<MapPin className="w-5 h-5" />}
                value={heroPickupCity}
                onChange={(e) => setHeroPickupCity(e.target.value)}
                options={pickupOptions}
              />
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Destination</span>
              <Input
                icon={<MapPin className="w-5 h-5" />}
                type="text"
                value={heroDestinationCity}
                onChange={(e) => setHeroDestinationCity(e.target.value)}
                placeholder="Enter drop address"
                required
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Date & Time</span>
              <div className="flex gap-3 w-full">
                <div className="flex-1 min-w-0">
                  <DatePicker
                    value={heroDate}
                    onChange={(e) => setHeroDate(e.target.value)}
                    required
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Input
                    icon={<Clock3 className="w-5 h-5" />}
                    type="time"
                    value={heroTime}
                    onChange={(e) => setHeroTime(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#FFC107] font-semibold uppercase">Vehicle</span>
              <Select
                icon={<Briefcase className="w-5 h-5" />}
                value={heroVehicle}
                onChange={(e) => setHeroVehicle(e.target.value)}
                options={vehicleOptions}
              />
            </div>

            <div className="hidden lg:block" />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleHeroSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {renderTabFields()}
      </div>

      {/* Book on WhatsApp Primary CTA */}
      <div className="pt-6 flex justify-center px-6 md:px-8">
        <button
          type="submit"
          className="w-full max-w-md h-[58px] bg-[#FFC107] hover:bg-[#FFC107]/90 text-black font-extrabold rounded-[16px] shadow-[0_10px_30px_rgba(255,193,7,0.15)] hover:shadow-[0_12px_40px_rgba(255,193,7,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden cursor-pointer focus:outline-none"
        >
          <svg 
            className="w-5.5 h-5.5 fill-current" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span>Book on WhatsApp</span>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </button>
      </div>
    </form>
  );
};
