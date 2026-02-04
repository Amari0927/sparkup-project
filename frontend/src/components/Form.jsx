import { useState } from "react"
import axios from 'axios'


const Form = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        services: '',
        serviceDetails: '',
        fileAttachment: []
    })

    const [loading, setLoading] = useState(false)

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault()

        const data = new FormData()
        data.append('fullName', formData.fullName)
        data.append('email', formData.email)
        data.append('phoneNumber', formData.phoneNumber)
        data.append('services', formData.services)
        data.append('serviceDetails', formData.serviceDetails)
        if (formData.fileAttachment.length > 0) {
            formData.fileAttachment.forEach((file) => {
                data.append('fileAttachment', file)
            })
        }
        await axios.post('https://sparkup-backend.onrender.com/send-email', data)
            .then(res => {
                console.log(res.data)
                alert('Request submitted successfully')
                setFormData({
                    fullName: '',
                    email: '',
                    phoneNumber: '',
                    services: '',
                    serviceDetails: '',
                    fileAttachment: []
                })
            })
            .catch(err => {
                console.log(err)
                alert('Failed to submit request')
            }).finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-16 pt-[100px] md:pt-[140px]">
            <div className="bg-[#EFFFEF] flex flex-col items-center rounded-2xl p-10 w-[400px] shadow-xl md:w-[700px] ">
                <h2 className="font-semibold text-3xl mb-4 md:mb-12">
                    Request A Service
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <label htmlFor="fullName"></label>
                        <input className="p-2 rounded-lg border w-80 border-gray-300 placeholder-gray-700 
                                    focus:outline-none focus:ring focus:border-green-400 md:w-[400px] md:p-3" 
                                    required
                                    value={formData.fullName} 
                                    onChange={handleChange} 
                                    type="text" 
                                    name="fullName" 
                                    id="fullName" 
                                    placeholder='Full Name' />
                    </div>
                    <div>
                        <label htmlFor="email"></label>
                        <input className="p-2 rounded-lg border w-80 border-gray-300 placeholder-gray-700 
                                    focus:outline-none focus:ring focus:border-green-400 md:w-[400px] md:p-3" 
                                    required 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder='Email' />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber"></label>
                        <input className="p-2 rounded-lg border w-80 border-gray-300 placeholder-gray-700 
                                    focus:outline-none focus:ring focus:border-green-400 md:w-[400px] md:p-3" 
                                    required 
                                    value={formData.phoneNumber}
                                    onChange={handleChange} 
                                    type="tel" 
                                    name="phoneNumber" 
                                    id="phoneNumber" 
                                    placeholder='Phone Number' />
                    </div>
                    <div>
                        <label htmlFor="services"></label>
                        <select className="p-2 rounded-lg border w-80 border-gray-300 focus:outline-none focus:ring
                                    focus:border-green-400 md:w-[400px] md:p-3" 
                                    required value={formData.services} onChange={handleChange} name="services" id="services">
                            <option value="">Select a service</option>
                            <option value="electrical-installation">Electrical Installation</option>
                            <option value="cctv-installation">CCTV Installation</option>
                            <option value="network-cabling">Network Cabling</option>
                            <option value="general-maintenance">General Maintenance</option>
                            <option value="ac-maintenance">AC Maintenance</option>
                            <option value="plumbing-maintenance">Plumbing Maintenance</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="serviceDetails"></label>
                        <textarea
                            className="p-2 rounded-lg border w-80 border-gray-300 placeholder-gray-700 
                                    focus:outline-none focus:ring focus:border-green-400  h-40 md:w-[400px] resize-none"
                            required
                            value={formData.serviceDetails}
                            onChange={handleChange}
                            name="serviceDetails"
                            id="serviceDetails"
                            placeholder='Provide details about the service you need'>
                        </textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fileAttachment" className="font-medium">Attach an image (Optional)</label>
                        <input
                            type="file"
                            name="fileAttachment"
                            id="fileAttachment"
                            multiple
                            onChange={(e) =>
                                setFormData({ ...formData, fileAttachment: Array.from(e.target.files) })
                            }
                            className="p-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 
                                            file:border-0 file:text-white file:bg-[#2ecc71] file:rounded-md 
                                            file:font-medium hover:file:bg-[#27ae60] transition-all cursor-pointer"
                        />
                    </div>
                    <button
                        disabled={loading}
                        className={`px-4 py-3 rounded-lg shadow-md text-white font-semibold transition-all
                            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#2ecc71] hover:bg-[#27ae60]"}`}
                    >
                        {loading ? "Submitting..." : "Submit Request"}
                    </button>
                </form>
            </div>
            
        </div>
    )
}

export default Form