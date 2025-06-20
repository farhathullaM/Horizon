import { perk } from '@/data/perks'

const WhyChooseBosse = () => {
  return (
          <section className="p-10 max-md:p-5">
        <h2 className="text-2xl font-semibold mb-3 ">
          Why Choose BOSSE Through Horizon?
        </h2>

        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {perk.map((perk, index) => (
            <div
              key={index}
              className="bg-[#c2cbd1] text-lg text-[#092f4a] rounded-md p-5 hover:bg-[#aabfcf] hover:text-[#fff] cursor-pointer"
            >
              {perk}
            </div>
          ))}
        </div>
      </section>
  )
}

export default WhyChooseBosse