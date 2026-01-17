import ScheduleTime from "./schedule/ScheduleTime";

const Schedule = () => {
  return (
    <div className="md:min-h-screen px-5 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Event Schedule
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="font-semibold md:text-3xl text-2xl">31 January 2026</p>
          <p className="mb-6 mt-3 md:text-xl">Los Angeles, California</p>

          <ul className="space-y-6 md:text-xl text-xs">
            <ScheduleTime time="08:00 – 09:00" description="Participant Registration"/>
            <ScheduleTime time="09:00 – 09:30" description="Opening Ceremony"/>
            <ScheduleTime time="09:30 – 12:00" description="Kite Design & Flying Competition"/>
            <ScheduleTime time="12:00 – 13:00" description="Break Time"/>
            <ScheduleTime time="13:00 – 15:30" description="Final Competition & Jury Assessment"/>
            <ScheduleTime time="15:30 – 16:30" description="Entertainment & Community Session"/>
            <ScheduleTime time="16:30 – 17:00" description="Awarding & Closing Ceremony"/>
          </ul>
        </div>

        {/* RIGHT CONTENT - MAP */}
        <div className="w-full h-87.5 md:h-112.5 overflow-hidden rounded-xl shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105842.07206615707!2d-118.3002231!3d34.0037118!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6f954005675%3A0x9e94554f839c09df!2sDodger%20Stadium!5e0!3m2!1sen!2sid!4v1768646223246!5m2!1sen!2sid"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
