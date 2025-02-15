export default function RegistrationFee() {
    return (
      // Ganti background jadi #B19726
      <section className="relative bg-[#B19726] py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Judul Section */}
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#365427] mb-8">
            REGISTRATION FEE
          </h2>
  
          {/* Grid Container: kiri (fees) & kanan (transfer info) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kiri: Fee National & International */}
            <div className="space-y-8">
              {/* National Fee */}
              <div className="relative p-[2px] rounded-xl 
                              bg-gradient-to-tr from-[#B19726] to-[#D9D9D9] 
                              shadow-xl">
                {/* Lapisan dalam (efek kaca) */}
                <div className="rounded-xl p-6 bg-white/30 backdrop-blur-md">
                  <h3 className="text-xl font-semibold text-[#365427] mb-4">
                    National
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Participant */}
                    <div className="
                      flex flex-col items-center justify-center 
                      rounded-md py-4 
                      bg-gradient-to-t from-[#1F4923] to-[#558C3F] text-white
                    ">
                      <p className="font-semibold">Participant</p>
                      <p className="text-lg">Rp. 100.000</p>
                    </div>
                    {/* Presenter */}
                    <div className="
                      flex flex-col items-center justify-center 
                      rounded-md py-4 
                      bg-gradient-to-t from-[#1F4923] to-[#558C3F] text-white
                    ">
                      <p className="font-semibold">Presenter</p>
                      <p className="text-lg">Rp. 400.000</p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* International Fee */}
              <div className="relative p-[2px] rounded-xl 
                              bg-gradient-to-tr from-[#B19726] to-[#D9D9D9] 
                              shadow-xl">
                {/* Lapisan dalam (efek kaca) */}
                <div className="rounded-xl p-6 bg-white/30 backdrop-blur-md">
                  <h3 className="text-xl font-semibold text-[#365427] mb-4">
                    International
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Participant */}
                    <div className="
                      flex flex-col items-center justify-center 
                      rounded-md py-4 
                      bg-gradient-to-t from-[#1F4923] to-[#558C3F] text-white
                    ">
                      <p className="font-semibold">Participant</p>
                      <p className="text-lg">USD 7</p>
                    </div>
                    {/* Presenter */}
                    <div className="
                      flex flex-col items-center justify-center 
                      rounded-md py-4 
                      bg-gradient-to-t from-[#1F4923] to-[#558C3F] text-white
                    ">
                      <p className="font-semibold">Presenter</p>
                      <p className="text-lg">USD 25</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Kanan: Info Transfer */}
            <div className="space-y-8">
              {/* Bank Transfer */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#365427] mb-4">
                  Transfer to:
                </h3>
                <div className="space-y-2">
                  <p className="text-[#365427] font-medium">Bank BCA</p>
                  <p>
                    <span className="font-semibold">Account Name:</span> 
                    Nikita Bella Angelina
                  </p>
                  <p>
                    <span className="font-semibold">Account Number:</span> 
                    8630 481 741
                  </p>
                </div>
              </div>
  
              {/* PayPal Transfer */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#365427] mb-4">
                  Transfer to:
                </h3>
                <div className="space-y-2">
                  <p className="text-[#365427] font-medium">PayPal</p>
                  <p>
                    <span className="font-semibold">Account Name:</span> SUIBM
                  </p>
                  <p>
                    <span className="font-semibold">Account Link:</span>{" "}
                    <a
                      href="https://paypal.me/SUIBM"
                      className="text-blue-600 underline"
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
        </div>
      </section>
    );
  }
  