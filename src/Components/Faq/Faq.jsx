import CommonHeadDes from "../../Common/CommonHeadDes";

const Faq = () => {
    return (
        <div>
            <CommonHeadDes heading={'Essential Travel Advice & Packing Tips'} description={`Prepare for your next adventure with expert travel advice tailored to your destination. Discover essential packing tips based on your journey type—whether you're heading to a sunny beach, misty mountains, or vibrant cities. Ensure a hassle-free experience by packing the right gear and making the most of your travel experience.`} />
            {/* faq starts here */}
            <div className="flex items-center gap-5 my-5">
                <div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">What should I pack for a beach vacation?</div>
                        <div className="collapse-content text-sm">For a beach vacation, pack light and breathable clothing, swimwear, sunglasses, sunscreen, a sun hat, flip-flops, a beach towel, and waterproof phone cases. Also, don't forget a reusable water bottle to stay hydrated!</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">What essentials should I carry when traveling to the mountains?</div>
                        <div className="collapse-content text-sm">When heading to the mountains, pack warm layers, moisture-wicking clothing, hiking boots, a rain jacket, gloves, hats, a first-aid kit, energy snacks, and a flashlight. It's also a good idea to bring a map or GPS device</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">How can I pack efficiently to save space?</div>
                        <div className="collapse-content text-sm">Use packing cubes, roll your clothes instead of folding them, choose versatile clothing pieces, and avoid overpacking. Consider using compression bags for bulkier items like jackets.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">What are some general travel tips for any destination?</div>
                        <div className="collapse-content text-sm">Always carry a first-aid kit, keep your important documents in waterproof pouches, learn basic phrases of the local language, stay aware of local customs, and have a copy of your itinerary easily accessible.</div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">What are the must-have items for city travel?</div>
                        <div className="collapse-content text-sm">For city travel, prioritize comfortable shoes, casual outfits, a portable charger, travel-sized toiletries, local currency, a travel guide or map, and a secure backpack or crossbody bag. Keep your important documents in a safe place.</div>
                    </div>
                </div>
                <div>
                    <img className="max-w-lg" src="https://i.ibb.co/zW9cpS8g/84610145-SL-050620-30640-14-1.jpg" alt="faq logo" />
                </div>
            </div>
        </div>
    );
};

export default Faq;