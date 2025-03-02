export default function RegistrationFee() {
  return (
    <section className="relative bg-[#B19726] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Judul Section */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-8">
          REGISTRATION FEE
        </h2>

        {/* Grid Container: kiri (fees) & kanan (transfer info) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Kiri: Fee National & International */}
          <div className="space-y-8">
            {/* National Fee */}
            <div
              className="
                relative w-[560px] h-[328px] p-[2px] 
                rounded-[32px] 
                bg-gradient-to-tr from-[#B19726] to-[#D9D9D9]
                shadow-xl
              "
            >
              {/* Lapisan dalam (efek kaca) */}
              <div className="rounded-[32px] p-6 bg-white/30 drop-shadow-xl backdrop-blur-md h-full">
                <h3 className="text-[40px] text-center font-semibold text-[#365427] mb-4">
                  National
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Participant */}
                  <div
                    className="
                      flex flex-col items-center justify-center 
                      rounded-md py-4 
                      bg-gradient-to-t from-[#1F4923] to-[#558C3F] text-white
                    "
                  >
                    <p className="font-semibold">Participant</p>
                    <p className="text-lg">Rp. 100.000</p>
                  </div>
                  {/* Presenter */}
                  <div
                    className="
                      flex flex-col items-center justify-center 
                      rounded-md py-4 
                      bg-gradient-to-t from-[#1F4923] to-[#558C3F] text-white
                    "
                  >
                    <p className="font-semibold">Presenter</p>
                    <p className="text-lg">Rp. 400.000</p>
                  </div>
                </div>
              </div>
            </div>

            {/* International Fee */}
            <div
              className="
                relative w-[560px] h-[328px] p-[2px] 
                rounded-[32px] 
                bg-gradient-to-tr from-[#B19726] to-[#D9D9D9] 
                shadow-xl
              "
            >
              {/* Lapisan dalam (efek kaca) */}
              <div className="rounded-[32px] p-6 bg-white/30 drop-shadow-xl backdrop-blur-md h-full">
                <h3 className="text-[40px] text-center font-semibold text-[#365427] mb-4">
                  International
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Participant */}
                  <div
                    className="
                      flex flex-col items-center justify-center 
                      rounded-md py-4 
                      bg-gradient-to-t from-[#1F4923] to-[#558C3F] text-white
                    "
                  >
                    <p className="font-semibold">Participant</p>
                    <p className="text-lg">USD 7</p>
                  </div>
                  {/* Presenter */}
                  <div
                    className="
                      flex flex-col items-center justify-center 
                      rounded-md py-4 
                      bg-gradient-to-t from-[#1F4923] to-[#558C3F] text-white
                    "
                  >
                    <p className="font-semibold">Presenter</p>
                    <p className="text-lg">USD 25</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan: Info Transfer (Pill Cards) */}
          <div className="flex flex-col items-start justify-center space-y-8">
            {/* Bank BCA Transfer */}
            <div
              className="
                w-[650px] h-[155px]
                rounded-[80px]
                bg-gradient-to-r from-[#1F4923] to-[#558C3F]
                text-white
                p-6 
                flex flex-col items-center justify-center
                drop-shadow-xl 
              "
            >
              <h3 className="text-xl font-semibold mb-2">Transfer to:</h3>
              <p className="font-medium">Bank BCA</p>
              <p>Account Name: Nikita Bella Angelina</p>
              <p>Account Number: 8630 481 741</p>
            </div>

            {/* PayPal Transfer */}
            <div
              className="
                w-[650px] h-[155px]
                rounded-[80px]
                bg-gradient-to-r from-[#1F4923] to-[#558C3F]
                text-white
                p-6
                flex flex-col items-center justify-center
                drop-shadow-xl 
              "
            >
              <h3 className="text-xl font-semibold mb-2">Transfer to:</h3>
              <p className="font-medium">PayPal</p>
              <p>Account Name: SUIBM</p>
              <p>
                Account Link:{" "}
                <a
                  href="https://paypal.me/SUIBM"
                  className="underline text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  paypal.me/SUIBM
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
