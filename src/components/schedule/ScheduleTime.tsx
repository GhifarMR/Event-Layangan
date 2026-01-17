interface info {
    time: string,
    description: string
}

const ScheduleTime = ({time, description} : info) => {
  return (
    <div>
      <li className="flex font-medium gap-5">
        <p>{time}</p>
        <p>{description}</p>
      </li>
    </div>
  );
};

export default ScheduleTime;
