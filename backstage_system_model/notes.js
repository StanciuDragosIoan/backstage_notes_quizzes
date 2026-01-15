/**
 * @section System Model
 *
 * @section Core Entities
 * @description
 * We model software in the Backstage catalogue using these three core entities (further explained below):
 * - Components are individual pieces of software
 * - APIs are the boundaries between different components
 * - Resources are physical or virtual infrastructure needed to operate a component
 *
 * @section Component
 * @description
 * A component is a piece of software, for example a mobile feature, web site, backend service, or data
 * pipeline (list not exhaustive). A component can be tracked in source control, or use some existing
 * open source or commercial software.
 *
 * A component can implement APIs for other components to consume. In turn, it might consume APIs implemented
 * by other components, or directly depend on components or resources that are attached to it at runtime.
 *
 * @section API
 * @description
 * APIs form an important (maybe the most important) abstraction that allows large software ecosystems
 * to scale. Thus, APIs are a first class citizen in the Backstage model and the primary way to discover
 * existing functionality in the ecosystem.
 *
 * APIs are implemented by components and form boundaries between components. They might be defined using
 * an RPC IDL (e.g., Protobuf, GraphQL, ...), a data schema (e.g., Avro, TFRecord, ...), or as code interfaces.
 * In any case, APIs exposed by components need to be in a known machine-readable format so we can build
 * further tooling and analysis on top.
 *
 * @section Resource
 * @description
 * Resources are the infrastructure a component needs to operate at runtime, like BigTable databases,
 * Pub/Sub topics, S3 buckets, or CDNs. Modelling them together with components and systems will better
 * allow us to visualize resource footprint, and create tooling around them.
 *
 * @section Organizational Entities
 *
 * @subsection User
 * @description
 * A user describes a person, such as an employee, a contractor, or similar.
 *
 * @subsection Group
 * @description
 * A group describes an organizational entity, such as for example a team, a business unit, or a loose
 * collection of people in an interest group.
 *
 * @section Ecosystem Modeling
 * @description
 * A large catalogue of components, APIs, and resources can be highly granular and hard to understand as a whole.
 * It might thus be convenient to further categorize these entities using the following (optional) concepts:
 * - Systems are a collection of entities that cooperate to perform some function
 * - Domains relate entities and systems to part of the business
 *
 * @subsection System
 * @description
 * With increasing complexity in software, systems form an important abstraction level to help us reason
 * about software ecosystems. Systems are a useful concept in that they allow us to ignore the implementation
 * details of a certain functionality for consumers, while allowing the owning team to make changes as they see
 * fit (leading to low coupling).
 *
 * A system, in this sense, is a collection of resources and components that exposes one or several public APIs.
 * The main benefit of modelling a system is that it hides its resources and private APIs between the components
 * for any consumers. This means that as the owner, you can evolve the implementation, in terms of components and
 * resources, without your consumers being able to notice. Typically, a system will consist of at most a handful
 * of components (see Domain for a grouping of systems).
 *
 * For example, a playlist management system might encapsulate a backend service to update playlists, a backend
 * service to query them, and a database to store them. It could expose an RPC API, a daily snapshots dataset,
 * and an event stream of playlist updates.
 *
 * @subsection Domain
 * @description
 * While systems are the basic level of encapsulation for related entities, it is often useful to group a collection
 * of systems that share terminology, domain models, metrics, KPIs, business purpose, or documentation, i.e., they
 * form a bounded context.
 *
 * For example, it would make sense if the different systems in the “Payments” domain would come with some
 * documentation on how to accept payments for a new product or use-case, share the same entity types in their APIs,
 * and integrate well with each other. Other domains could be “Content Ingestion”, “Ads”, or “Search”.
 *
 * In case of a large organization, it might make sense to further group domains in a hierarchy, where a domain
 * can be a subdomain of another domain.
 *
 * @section Other
 *
 * @subsection Location
 * @description
 * A location is a marker that references other places to look for catalog data.
 *
 * @subsection Type
 * @description
 * The type field in the system has no set meaning. It is up to the user to assign their own types and use them
 * as desired, such as for link validation or creating custom UI components. Some common pre-defined types are
 * depicted in the ecosystem modeling diagram.
 *
 * @subsection Template
 * @description
 * A template definition describes both the parameters that are rendered in the frontend part of the scaffolding
 * wizard, and the steps that are executed when scaffolding that component.
 */
