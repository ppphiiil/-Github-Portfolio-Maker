//Add Package
const mongoose = require( "mongoose" );

//create cofrom Schema
const Schema = mongoose.Schema;

const caseStudySchema = new Schema( {

    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    longDescription: { type: Number, required: true },
    mainImage: { type: String, required: true },
    images:
        [{
            image: { type: String, required: true },
            description: { type: String, required: true }
        }
        ]
    category: { type: [String] },
    caseStudyType: { type: [String] },
    batches: {
        featured: Boolean,
        languages: { type: [String], required: true },
        dependencies: { type: [String] },
    }
} )

//mongo create a cooection
const caseStudyModel = mongoose.model( "caseStudy", caseStudySchema )

module.exports = caseStudyModel;