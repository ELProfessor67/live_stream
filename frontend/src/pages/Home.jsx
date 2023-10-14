import React from 'react'
import HeroSection from '../components/HeroSection'
import { PricingSection } from '../components/PricingSection'
import TestomonialSection from '../components/TestomonialSection'
import { OurTeamSection } from '../components/OurTeamSection'

export const Home = () => {
    return (
        <>
            <HeroSection/>
            <PricingSection/>
            <TestomonialSection/>
            <OurTeamSection/>
        </>
    )
}
