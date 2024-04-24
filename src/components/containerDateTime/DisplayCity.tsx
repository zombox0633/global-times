type DisplayCityPropsType = {
  cityName: string;
};

function DisplayCity({ cityName }: DisplayCityPropsType) {
  return (
    <div className='z-40 flex items-center justify-end'>
      <h2>{cityName}</h2>
    </div>
  );
}

export default DisplayCity;
