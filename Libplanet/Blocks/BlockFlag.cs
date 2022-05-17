namespace Libplanet.Blocks
{
    public enum BlockFlag
    {
        /// <summary>
        /// No response.
        /// </summary>
        Unknown = 0,

        /// <summary>
        /// Vote.
        /// </summary>
        Absent = 1,

        /// <summary>
        /// Commit.
        /// </summary>
        Commit = 2,

        /// <summary>
        /// Error.
        /// </summary>
        Null = 3,
    }
}
