'use client'; // as I am using useState, I will have to include "use client"

import Heading from "../common/Heading"; // Importing the common Heading component
import Button from "../common/Button"; // Importing the common Button component
import { useState } from 'react'; // Importing the useState hook from React

// the Price component

export default function Price() {

  // useState hook to manage the billing period state
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // Function to handle the change of billing period
  const handleBillingPeriodChange = (period: string) => {
    setBillingPeriod(period); // this sets the value of the billing period
  };

  return (
    <section className="py-20">
      {/* Heading component with props */}
      <Heading 
        buttonContent="$ Pricing ->" 
        headingContent="Quality Without Any Compromise" 
        paraContent1="Automated CI/CD streamlines feature delivery, scalable infrastructure ensures " 
        paraContent2="global edge optimization and app monitoring capabilities for peak site performance."
      />
      <div className="text-white min-h-screen flex items-center justify-center p-5">
        <div className="w-full max-w-4xl">
          <div className="flex justify-center mb-8">
            {/* Monthly button */}
            <button
              className={`px-4 py-2 rounded-l-lg ${billingPeriod === 'monthly' ? 'bg-gray-700' : 'bg-gray-800'}`}
              onClick={() => handleBillingPeriodChange('monthly')}
            >
              Monthly
            </button>
            {/* Yearly button */}
            <button
              className={`px-4 py-2 rounded-r-lg ${billingPeriod === 'yearly' ? 'bg-gray-700' : 'bg-gray-800'}`}
              onClick={() => handleBillingPeriodChange('yearly')}
            >
              Yearly
            </button>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-6 items-center md:justify-center md:items-start">
            {/* Basic plan card */}
            <div className="w-5/6 h-1/3 rounded-lg text-center border border-gray-700 flex flex-col items-start p-5">
              <h3 className="text-xl font-semibold">Basic</h3>
              <p className="text-gray-400">Best for Small projects</p>
              <p className="text-4xl font-bold mt-4">$99</p>
              <Button height="40px" width="100%" bgColor="white" content="Buy now" radius="5px" color="black" className="my-5"/>
              <hr className="bg-gray-600 w-full my-7"/>
              <ul className="text-left mt-4 space-y-2 list-disc ml-4">
                <li>Custom Domain Registration</li>
                <li>Basic Website Hosting</li>
                <li>Standard Security Features</li>
                <li>Mobile-Responsive Design</li>
                <li>Basic SEO Optimization</li>
                <li>Content Management System (CMS)</li>
                <li>Contact Form Integration</li>
                <li>Social Media Integration</li>
              </ul>
            </div>

            {/* Standard plan card */}
            <div className="w-5/6 h-1/3 rounded-lg bg-[#1E293B] text-center border border-gray-700 flex flex-col items-start p-5">
              <span className="flex items-center justify-between w-full h-5">
                <h3 className="text-xl font-semibold">Standard</h3>
                <Button height="20px" width="35%" bgColor="white" content="Most Popular" radius="20px" color="black" className="text-[10px] font-semibold"/>
              </span>
              <p className="text-gray-400">Best for Large projects</p>
              <p className="text-4xl font-bold mt-4">$299</p>
              <Button height="40px" width="100%" bgColor="white" content="Buy now" radius="5px" color="black" className="my-5"/>
              <hr className="bg-gray-600 w-full my-7"/>
              <ul className="text-left mt-4 space-y-2 list-disc ml-4">
                <li>Everything in Basic Plan</li>
                <li>Advanced Security Features</li>
                <li>Enhanced SEO Optimization</li>
                <li>Blog Setup and Management</li>
                <li>E-commerce Integration</li>
                <li>Up to 10 Pages</li>
                <li>Custom Email Accounts</li>
                <li>Monthly Performance Reports</li>
                <li>Priority Email Support</li>
                <li>Bi-Weekly Backups</li>
                <li>Social Media Management Tools</li>
              </ul>
            </div>

            {/* Premium plan card */}
            <div className="w-5/6 h-1/3 rounded-lg text-center border border-gray-700 flex flex-col items-start p-5">
              <h3 className="text-xl font-semibold">Premium</h3>
              <p className="text-gray-400">Best for Organization</p>
              <p className="text-4xl font-bold mt-4">$399</p>
              <Button height="40px" width="100%" bgColor="white" content="Buy now" radius="5px" color="black" className="my-5"/>
              <hr className="bg-gray-600 w-full my-7"/>
              <ul className="text-left mt-4 space-y-2 list-disc ml-4">
                <li>Everything in Standard Plan</li>
                <li>Custom Web Application Development</li>
                <li>Advanced E-commerce Features</li>
                <li>Unlimited Pages</li>
                <li>Dedicated Account Manager</li>
                <li>24/7 Phone and Email Support</li>
                <li>Weekly Backups</li>
                <li>Advanced Analytics and Reporting</li>
                <li>End to End Integration test suite</li>
                <li>Custom API Integration</li>
                <li>Personalized SEO Strategy</li>
                <li>Transcoder Framework</li>
                <li>Personalized Framework Strategy</li>
                <li>Premium CDN Services</li>
                <li>Ongoing Website Maintenance and Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
