import React from 'react'

const WhoCan = () => {
  return (
          <section className="mb-12 p-10 max-lg:p-5 max-md:p-2">
        <h2 className="text-3xl text-[#1E4765] font-semibold mb-3">Eligibility Criteria</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#ced8da] p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2 max-md:text-lg ">Secondary (Class 10)</h3>
            <ul className="list-disc list-inside text-lg max-md:text-base space-y-1">
              <li>Minimum age: 15 years</li>
              <li>No formal education required</li>
              <li>Must be able to read and write</li>
              <li>Age proof required</li>
            </ul>
          </div>
          <div className="bg-[#ced8da] p-4 rounded-lg shadow">
            <h3 className="text-xl max-md:text-lg font-semibold mb-2">
              Senior Secondary (Class 12)
            </h3>
            <ul className="list-disc max-md:text-base list-inside space-y-1 text-lg ">
              <li>Must have passed Class 10 from a recognized board</li>
              <li>Submission of Class 10 certificate required</li>
              <li>Age proof required</li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default WhoCan