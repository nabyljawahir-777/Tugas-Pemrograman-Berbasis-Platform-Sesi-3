const ParkingHour = 3;
const FirstHour = 5000;
const AdditionalHour = 3000;
const MaximalHour = 20000;
const Result = ((ParkingHour - 1) * AdditionalHour + FirstHour);
if (Result > MaximalHour){
    console.log(MaximalHour)
}else {
    console.log(Result)
}