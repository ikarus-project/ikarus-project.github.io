var hierarchy =
[
    [ "Ikarus::AlgoInfo", "a01928.html", null ],
    [ "Ikarus::ArcLength", "a01416.html", null ],
    [ "Ikarus::ArrudaBoyceMatParameters", "a01576.html", null ],
    [ "Ikarus::Materials::ArrudaBoyceT< ST_ >", "a01580.html", null ],
    [ "Ikarus::AssemblerManipulator< A, Ass >", "a01312.html", null ],
    [ "Base", null, [
      [ "Ikarus::Vtk::Writer< AS, DC, Base >", "a01812.html", null ]
    ] ],
    [ "Ikarus::BasisHandler< PB >", "a01944.html", null ],
    [ "Ikarus::Materials::BlatzKoT< ST_ >", "a01584.html", null ],
    [ "Ikarus::Broadcaster< Args >", "a01948.html", null ],
    [ "Ikarus::Broadcaster< Signatures >", "a01948.html", [
      [ "Ikarus::Broadcasters< void(ControlMessages), void(ControlMessages, const std::string &), void(ControlMessages, int, const std::string &), void(ControlMessages, int, double), void(ControlMessages, const ControlRoutineStateType< F > &), Args... >", "a01956.html", [
        [ "Ikarus::ControlRoutineBase< F, S, Args >", "a01372.html", null ]
      ] ],
      [ "Ikarus::Broadcasters< void(ControlMessages), void(ControlMessages, const std::string &), void(ControlMessages, int, const std::string &), void(ControlMessages, int, double), void(ControlMessages, const ControlRoutineStateType< NLS::DifferentiableFunction > &), Args... >", "a01956.html", [
        [ "Ikarus::ControlRoutineBase< NLS::DifferentiableFunction >", "a01372.html", [
          [ "Ikarus::LoadControl< NLS >", "a01388.html", null ]
        ] ]
      ] ],
      [ "Ikarus::Broadcasters< void(NonLinearSolverMessages), void(NonLinearSolverMessages, double), void(NonLinearSolverMessages, int), void(NonLinearSolverMessages, const NonlinearSolverStateType< F > &), Args... >", "a01956.html", [
        [ "Ikarus::NonlinearSolverBase< F >", "a01884.html", [
          [ "Ikarus::NewtonRaphson< F, LS, UF >", "a01860.html", null ],
          [ "Ikarus::NewtonRaphsonWithSubsidiaryFunction< F, LS, UF >", "a01872.html", null ],
          [ "Ikarus::TrustRegion< F, preConditioner, UF >", "a01924.html", null ]
        ] ],
        [ "Ikarus::NonlinearSolverBase< F, Args >", "a01884.html", null ]
      ] ],
      [ "Ikarus::Broadcasters< void(ControlMessages), void(ControlMessages, const std::string &), void(ControlMessages, int, const std::string &), void(ControlMessages, int, double), void(ControlMessages, const PathFollowingStateType< NLS::DifferentiableFunction > &), Args... >", "a01956.html", [
        [ "Ikarus::ControlRoutineBase< NLS::DifferentiableFunction, PathFollowingStateType< NLS::DifferentiableFunction > >", "a01372.html", [
          [ "Ikarus::PathFollowing< NLS, PF, ASS >", "a01404.html", null ]
        ] ]
      ] ],
      [ "Ikarus::Broadcasters< Signatures >", "a01956.html", null ]
    ] ],
    [ "Ikarus::Broadcaster< void(Args...)>", "a01952.html", null ],
    [ "Ikarus::BulkModulusAndLamesFirstParameter", "a01756.html", null ],
    [ "Ikarus::traits::ChangeArgTypeAtPos< Func, Pos, NewType >", "a02160.html", null ],
    [ "Ikarus::utils::CheckFlags", "a02064.html", null ],
    [ "Ikarus::ControlInformation", "a01368.html", null ],
    [ "Ikarus::ControlRoutineFactory", "a01376.html", null ],
    [ "Ikarus::ControlRoutineState< D >", "a01380.html", null ],
    [ "Python::Conversion< autodiff::Real< order, T > >", "a02092.html", null ],
    [ "Ikarus::ConvertLameConstants< ValuePair >", "a01764.html", null ],
    [ "Ikarus::DefaultMembraneStrain", "a01696.html", null ],
    [ "Ikarus::Vtk::DefaultVTKWriterManager< GV >", "a01824.html", null ],
    [ "Ikarus::DeriveSizeType< class >", "a02020.html", null ],
    [ "Ikarus::DeriveSizeType< std::vector< bool > >", "a02028.html", null ],
    [ "Ikarus::DeriveSizeType< T >", "a02024.html", null ],
    [ "Ikarus::Materials::Deviatoric< DF >", "a01600.html", null ],
    [ "Ikarus::Materials::DeviatoricInvariants< PS >", "a01588.html", null ],
    [ "Ikarus::DifferentiableFunctionFactory", "a02012.html", null ],
    [ "Dune::Functions::DifferentiableFunctionFromCallables", null, [
      [ "Ikarus::DifferentiableFunction< Range(D), DerivativeTraits, F, FF... >", "a02008.html", null ]
    ] ],
    [ "Ikarus::DirichletValues< B, FC >", "a02032.html", null ],
    [ "Ikarus::DisplacementControl", "a01424.html", null ],
    [ "Ikarus::EAS::E0< GEO >", "a01496.html", null ],
    [ "Eigen::EigenBase< Derived >", "a01960.html", null ],
    [ "Ikarus::EnhancedAssumedStrains< PreFE, FE >", "a01528.html", null ],
    [ "Ikarus::EnhancedAssumedStrainsPre", "a01532.html", null ],
    [ "std::false_type", null, [
      [ "Ikarus::Vtk::IsStructured< G >", "a01816.html", null ],
      [ "Ikarus::traits::hasType< T, Tuple >", "a02104.html", null ],
      [ "Ikarus::traits::isSharedPtr< T >", "a02108.html", null ],
      [ "Ikarus::traits::isUniquePtr< T >", "a02112.html", null ]
    ] ],
    [ "Ikarus::FEFactory< BH, SK, useFlat, useEigenRef >", "a01448.html", null ],
    [ "FEImpl", null, [
      [ "Ikarus::AutoDiffFE< FEImpl, forceAutoDiff >", "a01432.html", null ]
    ] ],
    [ "Ikarus::Impl::FEInit< PreFE, FE< PreFE, Skills... > >", null, [
      [ "Ikarus::FE< PreFE, Skills >", "a01436.html", null ]
    ] ],
    [ "Ikarus::FERequirements< sol, para, SV, PM >", "a01456.html", null ],
    [ "Ikarus::FETraits< BH, useRef, useFlat >", "a01492.html", null ],
    [ "Dune::FieldVector< K, N >", "a02016.html", null ],
    [ "Dune::FieldVector< double, 2 >", "a02016.html", null ],
    [ "Ikarus::FlatAssemblerBase< FEC, DV >", "a01328.html", [
      [ "Ikarus::ScalarFlatAssembler< FEC, DV >", "a01344.html", [
        [ "Ikarus::VectorFlatAssembler< FEC, DV >", "a01348.html", [
          [ "Ikarus::DenseFlatAssembler< FEC, DV >", "a01356.html", null ],
          [ "Ikarus::SparseFlatAssembler< FEC, DV >", "a01352.html", null ]
        ] ]
      ] ]
    ] ],
    [ "Ikarus::FlatIndexMergingStrategy< IMS >", "a02044.html", null ],
    [ "Ikarus::FlatIndexMergingStrategy< Dune::Functions::BasisFactory::BlockedInterleaved >", "a02048.html", null ],
    [ "Ikarus::FlatIndexMergingStrategy< Dune::Functions::BasisFactory::BlockedLexicographic >", "a02052.html", null ],
    [ "Ikarus::FlatPreBasis< PreBasis >", "a02040.html", null ],
    [ "Ikarus::FlatPreBasis< Dune::Functions::CompositePreBasis< IMS, SPB... > >", "a02056.html", null ],
    [ "Ikarus::FlatPreBasis< Dune::Functions::PowerPreBasis< IMS, SPB, C > >", "a02060.html", null ],
    [ "Ikarus::traits::FunctionTraits< T, typename >", "a02148.html", null ],
    [ "Ikarus::GentMatParameters", "a01592.html", null ],
    [ "Ikarus::Materials::GentT< ST_ >", "a01596.html", null ],
    [ "Ikarus::EAS::H1E21< GEO >", "a01516.html", null ],
    [ "Ikarus::EAS::H1E9< GEO >", "a01512.html", null ],
    [ "Ikarus::ResultEvaluators::HydrostaticStress", "a01772.html", null ],
    [ "Ikarus::IkarusInstance", "a02068.html", null ],
    [ "Ikarus::traits::Index< T, Tuple >", "a02140.html", null ],
    [ "Ikarus::Materials::InvariantBasedT< ST_, n >", "a01604.html", null ],
    [ "Ikarus::AdaptiveStepSizing::IterationBased", "a01364.html", null ],
    [ "IterativeSolverBase", null, [
      [ "Eigen::TruncatedConjugateGradient< std::decay_t< HessianType >, Eigen::Lower|Eigen::Upper, PreConditionerType >", "a01832.html", null ],
      [ "Eigen::TruncatedConjugateGradient< M, upLo, PC >", "a01832.html", null ]
    ] ],
    [ "Ikarus::KirchhoffLoveShell< PreFE, FE >::KinematicVariables< ST >", "a01544.html", null ],
    [ "Ikarus::Truss< PreFE, FE >::KinematicVariables< ST >", "a01716.html", null ],
    [ "Ikarus::KirchhoffLoveShellPre", "a01540.html", null ],
    [ "Ikarus::KlArgs", "a01548.html", null ],
    [ "Ikarus::LamesFirstParameterAndShearModulus", "a01760.html", null ],
    [ "Ikarus::LinearElasticPre< MAT >", "a01556.html", null ],
    [ "Ikarus::LinearSolverTemplate< ST >", "a01848.html", null ],
    [ "Ikarus::Listener", "a02084.html", [
      [ "Ikarus::FEMixin< PreFE, Skills... >", "a01720.html", [
        [ "Ikarus::FE< PreFE, Skills >", "a01436.html", null ]
      ] ],
      [ "Ikarus::ControlLogger", "a02072.html", null ],
      [ "Ikarus::ControlSubsamplingVertexVTKWriter< B >", "a02076.html", null ],
      [ "Ikarus::FEMixin< PreFE, Skills >", "a01720.html", null ],
      [ "Ikarus::GenericListener< M >", "a02080.html", null ],
      [ "Ikarus::NonLinearSolverLogger", "a02088.html", null ]
    ] ],
    [ "Ikarus::LoadControlConfig", "a01392.html", null ],
    [ "Ikarus::LoadControlSubsidiaryFunction", "a01420.html", null ],
    [ "Ikarus::Materials::Material< MI >", "a01672.html", null ],
    [ "Ikarus::Materials::Material< Hyperelastic< DEV, NoVolumetricPart > >", "a01672.html", [
      [ "Ikarus::Materials::Hyperelastic< DEV, VOL >", "a01612.html", null ]
    ] ],
    [ "Ikarus::Materials::Material< LinearElasticityT< ST > >", "a01672.html", [
      [ "Ikarus::Materials::LinearElasticityT< ST >", "a01676.html", null ]
    ] ],
    [ "Ikarus::Materials::Material< NeoHookeT< ST > >", "a01672.html", [
      [ "Ikarus::Materials::NeoHookeT< ST >", "a01616.html", null ]
    ] ],
    [ "Ikarus::Materials::Material< StVenantKirchhoffT< ScalarType > >", "a01672.html", [
      [ "Ikarus::Materials::StVenantKirchhoffT< ScalarType >", "a01684.html", null ]
    ] ],
    [ "Ikarus::Materials::Material< StVenantKirchhoffT< ST > >", "a01672.html", [
      [ "Ikarus::Materials::StVenantKirchhoffT< ST >", "a01684.html", null ]
    ] ],
    [ "Ikarus::Materials::Material< VanishingStrain< strainIndexPair, MI > >", "a01672.html", [
      [ "Ikarus::Materials::VanishingStrain< strainIndexPair, MI >", "a01688.html", null ]
    ] ],
    [ "Ikarus::Materials::Material< VanishingStress< stressIndexPair, MI > >", "a01672.html", [
      [ "Ikarus::Materials::VanishingStress< stressIndexPair, MI >", "a01692.html", null ]
    ] ],
    [ "Ikarus::MatrixAssembler< MA, FEC, DV, MT >", "a01340.html", null ],
    [ "Ikarus::MatrixAssembler< DenseFlatAssembler< FEC, DV >, FEC, DV, Eigen::MatrixXd >", "a01340.html", [
      [ "Ikarus::DenseFlatAssembler< FEC, DV >", "a01356.html", null ]
    ] ],
    [ "Ikarus::MatrixAssembler< SparseFlatAssembler< FEC, DV >, FEC, DV, Eigen::SparseMatrix< double > >", "a01340.html", [
      [ "Ikarus::SparseFlatAssembler< FEC, DV >", "a01352.html", null ]
    ] ],
    [ "Ikarus::Materials::MatrixIndexPair", "a01680.html", null ],
    [ "Ikarus::MatrixManipulator< Wrapper, Assembler >", "a01304.html", null ],
    [ "Ikarus::NeumannBoundaryLoadPre< GV >", "a01564.html", null ],
    [ "Ikarus::NewtonRaphsonConfig< LS, UF >", "a01868.html", null ],
    [ "Ikarus::NewtonRaphsonWithSubsidiaryFunctionConfig< LS, UF >", "a01880.html", null ],
    [ "Ikarus::NewtonRaphsonWithSubsidiaryFunctionSettings", "a01876.html", null ],
    [ "Ikarus::NonLinearElasticPre< MAT >", "a01704.html", null ],
    [ "Ikarus::NonlinearSolverFactory< NLSSetting >", "a01888.html", null ],
    [ "Ikarus::NonLinearSolverInformation", "a01912.html", null ],
    [ "Ikarus::NonlinearSolverState< D, CT >", "a01892.html", null ],
    [ "Ikarus::AdaptiveStepSizing::NoOp", "a01360.html", null ],
    [ "Ikarus::NRSettings", "a01864.html", null ],
    [ "Ikarus::Materials::OgdenT< ST_, n, tag >", "a01608.html", null ],
    [ "Ikarus::PathFollowingConfig< PF_, ASS_ >", "a01408.html", null ],
    [ "Ikarus::PathFollowingState< D >", "a01396.html", null ],
    [ "Ikarus::ResultEvaluators::PolarStress", "a01784.html", null ],
    [ "Ikarus::PreFE< BH, useFlat, useEigenRef >", "a01440.html", null ],
    [ "Ikarus::ResultEvaluators::PrincipalStress< dim >", "a01776.html", null ],
    [ "Ikarus::EAS::Q1E4< GEO >", "a01500.html", null ],
    [ "Ikarus::EAS::Q1E5< GEO >", "a01504.html", null ],
    [ "Ikarus::EAS::Q1E7< GEO >", "a01508.html", null ],
    [ "RealMAT", null, [
      [ "Ikarus::Experimental::AutoDiffMAT< RealMAT, forceAutoDiffV, forceAutoDiffS >", "a01428.html", null ]
    ] ],
    [ "Ikarus::traits::Rebind< Container, NewType >", "a02144.html", null ],
    [ "Ikarus::traits::remove_pointer< T >", "a02116.html", null ],
    [ "Ikarus::traits::ReplaceTypeAtPos< Tuple, Pos, NewType >", "a02152.html", null ],
    [ "Ikarus::FEMixin< PreFE, Skills >::RequirementType< bool, typename >", "a01724.html", null ],
    [ "Ikarus::FEMixin< PreFE, Skills >::RequirementType< false, T >", "a01728.html", null ],
    [ "Ikarus::FEMixin< PreFE, Skills >::RequirementType< true, T >", "a01732.html", null ],
    [ "Ikarus::ResultTypeBase< ResultTypes >", "a01488.html", null ],
    [ "Ikarus::ResultTypeBase< ResultTypes::cauchyAxialForce, ResultTypes::PK2AxialForce, ResultTypes::linearAxialForce >", "a01488.html", [
      [ "Ikarus::Truss< PreFE, FE >", "a01708.html", null ]
    ] ],
    [ "Ikarus::ResultTypeBase< ResultTypes::linearStress, ResultTypes::linearStressFull >", "a01488.html", [
      [ "Ikarus::LinearElastic< PreFE, FE, PRE >", "a01552.html", null ]
    ] ],
    [ "Ikarus::ResultTypeBase< ResultTypes::PK2Stress, ResultTypes::PK2StressFull >", "a01488.html", [
      [ "Ikarus::NonLinearElastic< PreFE, FE, PRE >", "a01700.html", null ]
    ] ],
    [ "Ikarus::ResultTypeBase<>", "a01488.html", [
      [ "Ikarus::KirchhoffLoveShell< PreFE, FE >", "a01536.html", null ]
    ] ],
    [ "RT", null, [
      [ "Ikarus::ResultWrapper< RT, storedResultShape >", "a01476.html", null ]
    ] ],
    [ "Ikarus::ScalarAssembler< SA, FEC, DV, ST >", "a01332.html", null ],
    [ "Ikarus::ScalarAssembler< ScalarFlatAssembler< FEC, DV >, FEC, DV, double >", "a01332.html", [
      [ "Ikarus::ScalarFlatAssembler< FEC, DV >", "a01344.html", null ]
    ] ],
    [ "Ikarus::ScalarManipulator< Wrapper, Assembler >", "a01296.html", null ],
    [ "ScalarWrapper< T >", "a01844.html", null ],
    [ "Ikarus::Skills< ARGS >", "a01736.html", null ],
    [ "Skills...", null, [
      [ "Ikarus::FEMixin< PreFE, Skills... >", "a01720.html", null ]
    ] ],
    [ "Ikarus::Skills< PreFE, PreFE::template FE< Skills... > >", "a01736.html", [
      [ "Ikarus::FEMixin< PreFE, Skills >", "a01720.html", null ]
    ] ],
    [ "Ikarus::utils::SolverDefault", "a01988.html", null ],
    [ "Eigen::SparseMatrixBase< Derived >", "a02096.html", null ],
    [ "Ikarus::Python::SparseMatrixWrapper< T >", "a01840.html", null ],
    [ "Ikarus::Stats", "a01932.html", null ],
    [ "Ikarus::SubsidiaryArgs", "a01412.html", null ],
    [ "Eigen::TCGInfo< Scalar >", "a01828.html", null ],
    [ "Eigen::TCGInfo< double >", "a01828.html", null ],
    [ "Eigen::TCGInfo< typename M::RealScalar >", "a01828.html", null ],
    [ "MatrixAss::template Implementation", null, [
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss, MatrixAss >", "a01324.html", null ]
    ] ],
    [ "ScalarAss::template Implementation", null, [
      [ "Ikarus::AssemblerManipulator< A, ScalarAss >", "a01316.html", null ],
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss >", "a01320.html", null ],
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss, MatrixAss >", "a01324.html", null ]
    ] ],
    [ "VectorAss::template Implementation", null, [
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss >", "a01320.html", null ],
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss, MatrixAss >", "a01324.html", null ]
    ] ],
    [ "MatrixAss::template Interface", null, [
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss, MatrixAss >", "a01324.html", null ]
    ] ],
    [ "ScalarAss::template Interface", null, [
      [ "Ikarus::AssemblerManipulator< A, ScalarAss >", "a01316.html", null ],
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss >", "a01320.html", null ],
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss, MatrixAss >", "a01324.html", null ]
    ] ],
    [ "VectorAss::template Interface", null, [
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss >", "a01320.html", null ],
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss, MatrixAss >", "a01324.html", null ]
    ] ],
    [ "Ikarus::Traction< PreFE, FE >", "a01560.html", null ],
    [ "Eigen::internal::traits< TruncatedConjugateGradient< MatrixType_, UpLo, Preconditioner_ > >", "a01836.html", null ],
    [ "Ikarus::ResultEvaluators::Triaxiality", "a01780.html", null ],
    [ "Ikarus::TRSettings", "a01916.html", null ],
    [ "std::true_type", null, [
      [ "Ikarus::Vtk::IsStructured< Dune::YaspGrid< dim, Coordinates > >", "a01820.html", null ],
      [ "Ikarus::traits::isSpecialization< U, U< T... > >", "a02120.html", null ],
      [ "Ikarus::traits::isSpecializationNonTypeAndTypes< Type, Type< T, N... > >", "a02124.html", null ],
      [ "Ikarus::traits::isSpecializationNonTypeNonTypeAndTypes< Type, Type< T, R, N... > >", "a02128.html", null ],
      [ "Ikarus::traits::isSpecializationNonTypes< Type, Type< N... > >", "a02136.html", null ],
      [ "Ikarus::traits::isSpecializationTypeNonTypeAndType< Type, Type< T, M, N > >", "a02132.html", null ],
      [ "Ikarus::traits::is_tuple< std::tuple< T... > >", "a02100.html", null ]
    ] ],
    [ "Ikarus::TrussPre", "a01712.html", null ],
    [ "Ikarus::TrustRegionConfig< preConditioner, UF >", "a01920.html", null ],
    [ "TrustRegionSettings", "a02212.html", null ],
    [ "std::tuple", null, [
      [ "Ikarus::AffordanceCollection< Affordances >", "a01452.html", null ]
    ] ],
    [ "Ikarus::traits::TupleToFunctionType< R, Tuple >", "a02156.html", null ],
    [ "Ikarus::utils::UpdateDefault", "a01992.html", null ],
    [ "Ikarus::VectorAssembler< VA, FEC, DV, VT >", "a01336.html", null ],
    [ "Ikarus::VectorAssembler< VectorFlatAssembler< FEC, DV >, FEC, DV, Eigen::VectorXd >", "a01336.html", [
      [ "Ikarus::VectorFlatAssembler< FEC, DV >", "a01348.html", null ]
    ] ],
    [ "Ikarus::VectorManipulator< Wrapper, Assembler >", "a01300.html", null ],
    [ "Ikarus::Materials::VF0", "a01624.html", null ],
    [ "Ikarus::Materials::VF1", "a01628.html", null ],
    [ "Ikarus::Materials::VF10", "a01664.html", null ],
    [ "Ikarus::Materials::VF11", "a01668.html", null ],
    [ "Ikarus::Materials::VF2", "a01632.html", null ],
    [ "Ikarus::Materials::VF3", "a01636.html", null ],
    [ "Ikarus::Materials::VF4", "a01640.html", null ],
    [ "Ikarus::Materials::VF5", "a01644.html", null ],
    [ "Ikarus::Materials::VF6", "a01648.html", null ],
    [ "Ikarus::Materials::VF7", "a01652.html", null ],
    [ "Ikarus::Materials::VF8", "a01656.html", null ],
    [ "Ikarus::Materials::VF9", "a01660.html", null ],
    [ "Ikarus::VolumeLoad< PreFE, FE >", "a01568.html", null ],
    [ "Ikarus::VolumeLoadPre< wd >", "a01572.html", null ],
    [ "Ikarus::Materials::Volumetric< VF >", "a01620.html", null ],
    [ "Ikarus::ResultEvaluators::VonMises", "a01768.html", null ],
    [ "Dune::VTKFunction", null, [
      [ "Ikarus::ResultFunction< AS, RT, UserFunction >", "a01792.html", null ]
    ] ],
    [ "Ikarus::YoungsModulusAndBulkModulus", "a01748.html", null ],
    [ "Ikarus::YoungsModulusAndLamesFirstParameter", "a01752.html", null ],
    [ "Ikarus::YoungsModulusAndPoissonsRatio", "a01740.html", null ],
    [ "Ikarus::YoungsModulusAndShearModulus", "a01744.html", null ],
    [ "Ikarus::A", null, [
      [ "Ikarus::AssemblerManipulator< A, ScalarAss >", "a01316.html", null ],
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss >", "a01320.html", null ],
      [ "Ikarus::AssemblerManipulator< A, ScalarAss, VectorAss, MatrixAss >", "a01324.html", null ]
    ] ]
];