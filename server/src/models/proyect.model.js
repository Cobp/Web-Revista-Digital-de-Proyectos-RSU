import mongoose from 'mongoose';

const RSUProyects = new mongoose.Schema({
    ProyectCode: {
        type: Number,
        required: true
    },
    ImgProyect:{ type: String },
    ProyectName: {
        type: String,
        required: true
    },
    ProjectDescription:{ type: String },
    StartingSemester: {
        type: Number,
        required: true
    },
    EndingSemester: {
        type: Number,
        required: true
    },
    UniversityFunction: {
        type: String,
        required: true
    },
    ResponsibleCareer: {
        type: String,
        required: true
    },
    FacultyInCharge: {
        type: String,
        required: true
    },
    ResponsibleCoordinator: {
        type: String,
        required: true
    },
    InternalResponsibleData: {
        type: String,
        required: true
    },
    RelatedExternalEntity:{ type: String },
    ExternalEntityData: { type: String }
},{
    timestamps: true,
    versionKey: false
})

export default mongoose.model('RSUProyects', RSUProyects)