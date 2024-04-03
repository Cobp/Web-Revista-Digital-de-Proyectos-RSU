import NewProyect from "../models/user.model.js";

export const newProyect = async ( req, res ) =>{
    const { 
        ProyectCode,
        ProyectName,
        ProjectDescription,
        StartingSemester,
        EndingSemester,
        UniversityFunction,
        ResponsibleCareer,
        FacultyInCharge,
        ResponsibleCoordinator,
        InternalResponsibleData,
        RelatedExternalEntity,
        ExternalEntityData
    } = req.body;
    
    try {
        const newProyect = new NewProyect({
            ProyectCode,
            ProyectName,
            ProjectDescription,
            StartingSemester,
            EndingSemester,
            UniversityFunction,
            ResponsibleCareer,
            FacultyInCharge,
            ResponsibleCoordinator,
            InternalResponsibleData,
            RelatedExternalEntity,
            ExternalEntityData
        })

        const ProyectoNuevo = await newProyect.save();
        res.json( ProyectoNuevo);

    } catch (error) {
        console.log(error);
    }
}